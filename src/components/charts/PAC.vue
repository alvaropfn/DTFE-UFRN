<script setup>
import { computed, onMounted, onUnmounted, reactive, ref } from "vue";
import { useGeneralStore } from "../../store";
import { mapCoinsFromStore, mapCurrenciesFromStore } from "../../utils/helper";

import BottomControls from "../filters/BottomControls.vue";
import Filters from "../filters/Filters.vue";
const store = useGeneralStore();

const chart = reactive({
  options: {
    chart: {
      id: "vuechart-example",
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
      name: "series-1",
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

const timeRef = ref(300000);
const timeOptions = [
  // { label: "1s", value: 1000 },
  { label: "5s", value: 5000 },
  { label: "30s", value: 30000 },
  { label: "1 min", value: 60000 },
  { label: "5 min", value: 300000 },
];
let intervalId;
const startInterval = (time) => {
  intervalId = setInterval(() => {
    store.fetchHistoryById({
      id: coin.value,
      query: {
        currency: currency.value,
        days: days.value,
      },
    });
  }, time);
};
const updateTime = (newTime) => {
  clearInterval(intervalId);
  timeRef.value = newTime;
  startInterval(timeRef.value);
};

const add = () => {
  // Add random number between 30 and 100 to series data
  series[0].data.push(Math.floor(Math.random() * 100));

  // Get last year and add next year to categories
  const lastYear =
    options.xaxis.categories[options.xaxis.categories.length - 1];
  options.xaxis.categories.push(lastYear + 1);
};

const updateDays = (event) => {
  days.value = event.value;
};

const updateCurrency = (event) => {
  currency.value = event.value;
};

const updateCoin = (event) => {
  coin.value = event.value;
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
    <apexchart width="500" type="line" :options="options" :series="series" />
    <BottomControls
      :timeRef="timeRef"
      :timeOptions="timeOptions"
      @update:time="updateTime"
    />
  </div>
</template>

<style scoped></style>
