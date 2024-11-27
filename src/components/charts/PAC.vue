<script setup>
import { computed, onMounted, onUnmounted, reactive, ref } from "vue";
import { useGeneralStore } from "../../store";
import {
  mapCoinsFromStore,
  mapCurrenciesFromStore,
  mapHistoryFromStore,
  mapSimplePrice,
} from "../../utils/helper";

import BottomControls from "../filters/BottomControls.vue";
import Filters from "../filters/Filters.vue";
const store = useGeneralStore();

const seriesName = computed(() => `price in ${currency.value}`);

const chart = reactive({
  options: {
    chart: {
      id: "vuechart-example",
      animations: {
        enabled: true,
        easing: "linear",
        dynamicAnimation: {
          speed: 1000,
        },
      },
    },
    xaxis: {
      type: "datetime",
    },
    title: {
      text: "Bitcoin Prices",
      align: "left",
    },
  },
  series: [
    {
      name: seriesName,
      data: [],
    },
  ],
});

const options = computed(() => chart.options);
const series = computed(() => chart.series);

const daysOptions = [
  { label: 1, value: 1 },
  { label: 7, value: 7 },
  { label: 30, value: 30 },
  { label: 90, value: 90 },
];

const days = ref(1);
const currency = ref("usd");
const loadingCurrency = ref(false);
const currencyOptions = ref([]);

const coin = ref("bitcoin");
const loadingCoins = ref(false);
const coinOptions = ref([]);

const timeRef = ref(30000);
const timeOptions = [
  // { label: "1s", value: 1000 },
  { label: "5s", value: 5000 },
  { label: "30s", value: 30000 },
  { label: "1 min", value: 60000 },
  { label: "5 min", value: 300000 },
];
let intervalId;

const fetchHistory = async () => {
  const history = await store.fetchHistoryById({
    id: coin.value,
    query: {
      currency: currency.value,
      days: days.value,
    },
  });
  chart.series[0].data = mapHistoryFromStore(history);
};

const startInterval = (time) => {
  intervalId = setInterval(() => {
    addData();
  }, time);
};
const updateTime = (newTime) => {
  clearInterval(intervalId);
  timeRef.value = newTime;
  startInterval(timeRef.value);
};

const addData = async () => {
  const data = await store.fetchSimplePrice({
    id: coin.value,
    query: {
      currency: currency.value,
    },
  });

  const [x, y] = mapSimplePrice({
    id: coin.value,
    currency: currency.value,
    data,
  });
  console.log(x, y);
  chart.series[0].data.push([x, y]);
};

const updateDays = (event) => {
  days.value = event.value;
  fetchHistory();
};

const updateCurrency = (event) => {
  currency.value = event.value;
  fetchHistory();
};

const updateCoin = (event) => {
  coin.value = event.value;
  fetchHistory();
};

onMounted(() => {
  loadingCurrency.value = true;
  store.fetchCurrencies().then((res) => {
    currencyOptions.value = mapCurrenciesFromStore(res);
    loadingCurrency.value = false;
  });

  store.fetchCoins().then((res) => {
    coinOptions.value = mapCoinsFromStore(res);
    loadingCoins.value = false;
  });
  fetchHistory();
  startInterval(timeRef.value);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<template>
  <div>
    <h2>PAC: Preço Atualizado de uma Criptomoeda</h2>
    <Filters
      :days="days"
      :daysOptions="daysOptions"
      @update:days="updateDays"
      :currency="currency"
      :currencyOptions="currencyOptions"
      :loadingCurrency="loadingCurrency"
      @update:currency="updateCurrency"
      :coin="coin"
      :coinOptions="coinOptions"
      :loadingCoins="loadingCoins"
      @update:coin="updateCoin"
    />
    <apexchart width="400" type="line" :options="options" :series="series" />
    <BottomControls
      :timeRef="timeRef"
      :timeOptions="timeOptions"
      @update:time="updateTime"
    />
  </div>
</template>

<style scoped></style>
