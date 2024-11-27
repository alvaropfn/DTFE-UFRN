<script setup>
import { computed, onMounted, onUnmounted, reactive, ref } from "vue";
import { useGeneralStore } from "../../store";
import { mapCurrenciesFromStore } from "../../utils/helper";

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

const timeRef = ref(5000);
const timeOptions = [
  { label: "5s", value: 5000 },
  { label: "30s", value: 30000 },
  { label: "1 min", value: 60000 },
  { label: "5 min", value: 300000 },
];

let intervalId;
const startInterval = (time) => {
  intervalId = setInterval(() => {
    // store.fetchCoins("success");
  }, time);
};

const options = computed(() => chart.options);
const series = computed(() => chart.series);

const interval = ref(7);
const currency = ref("usd");
const loadingCurrency = ref(false);
const currencyOptions = ref([]);
const coin = ref("bitcoin");

const add = () => {
  // Add random number between 30 and 100 to series data
  series[0].data.push(Math.floor(Math.random() * 100));

  // Get last year and add next year to categories
  const lastYear =
    options.xaxis.categories[options.xaxis.categories.length - 1];
  options.xaxis.categories.push(lastYear + 1);
};

const updateInterval = (event) => {
  interval.value = event.value;
};

const updateCurrency = (event) => {
  currency.value = event.value;
};

onMounted(() => {
  store.fetchCurrencies().then((res) => {
    currencyOptions.value = mapCurrenciesFromStore(res);
  });
  startInterval(timeRef.value);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<template>
  <div>
    <h4>PAC</h4>
    <Filters
      :interval="interval"
      @update:interval="updateInterval"
      :currency="currency"
      :currencyOptions="currencyOptions"
      :loadingCurrency="loadingCurrency"
      @update:currency="updateCurrency"
    />
    <apexchart width="500" type="line" :options="options" :series="series" />
    <BottomControls />
  </div>
</template>

<style scoped></style>
