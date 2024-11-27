<script setup>
import { NSelect } from "naive-ui";
const props = defineProps({
  days: {
    type: Number,
    required: true,
  },
  daysOptions: {
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

const emit = defineEmits(["update:days", "update:currency", "update:coin"]);

const onDaysChange = (_, value) => {
  emit("update:days", value);
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
          :value="props.days"
          :options="daysOptions"
          placeholder="days"
          @update:value="onDaysChange"
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
    </div>
  </div>
</template>
<style scoped></style>
