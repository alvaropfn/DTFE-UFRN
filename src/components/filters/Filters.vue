<script setup>
import { NSelect } from "naive-ui";
const props = defineProps({
  interval: {
    type: Number,
    required: true,
  },
  intervalOptions: {
    type: Array,
    required: true,
  },
  currency: String,
  loadingCurrency: Boolean,
  currencyOptions: {
    type: Array,
    required: true,
  },
  coin: String,
  loadingCoins: Boolean,
  coinOptions: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(["update:interval", "update:currency", "update:coin"]);

const onIntervalChange = (_, value) => {
  emit("update:interval", value);
};
const onCurrencyChange = (_, value) => {
  emit("update:currency", value);
};
const onCoinChange = (_, value) => {
  emit("update:coin", value);
};
</script>
<template>
  <div>
    <div style="display: flex">
      <div style="width: 84px">
        <n-select
          :value="props.interval"
          :options="intervalOptions"
          placeholder="days"
          @update:value="onIntervalChange"
        />
      </div>
      <div style="width: 124px">
        <n-select
          filterable
          placeholder="currency"
          :value="props.currency"
          :options="currencyOptions"
          :loading="loadingCurrency"
          @update:value="onCurrencyChange"
        />
      </div>
      <div style="width: 124px">
        <n-select
          filterable
          placeholder="coin"
          :value="props.coin"
          :options="props.coinOptions"
          :loading="props.loadingCurrency"
          @update:value="onCoinChange"
        />
      </div>
    </div>
  </div>
</template>
<style scoped></style>
