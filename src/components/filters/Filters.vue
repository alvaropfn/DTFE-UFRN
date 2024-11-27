<script setup>
import { NSelect } from "naive-ui";
const props = defineProps({
  interval: {
    type: Number,
    required: true,
  },
  currency: String,
  loadingCurrency: Boolean,
  currencyOptions: {
    type: Array,
    required: true,
  },
  coin: {
    type: String,
  }, // [bitcoin, ethereum, solana]
});

const emit = defineEmits(["update:interval", "update:currency"]);

const onIntervalChange = (_, value) => {
  emit("update:interval", value);
};
const onCurrencyChange = (_, value) => {
  emit("update:currency", value);
};
const onCoinChange = (_, value) => {
  emit("update:coin", value);
};

const intervalOptions = [
  { label: 7, value: 7 },
  { label: 30, value: 30 },
  { label: 90, value: 90 },
];

// const currencyOptions = [
//   {
//     label: "BTC",
//     value: "btc",
//   },
//   {
//     label: "ETH",
//     value: "eth",
//   },
//   {
//     label: "LTC",
//     value: "ltc",
//   },
//   {
//     label: "BCH",
//     value: "bch",
//   },
//   {
//     label: "BNB",
//     value: "bnb",
//   },
//   {
//     label: "EOS",
//     value: "eos",
//   },
//   {
//     label: "XRP",
//     value: "xrp",
//   },
//   {
//     label: "XLM",
//     value: "xlm",
//   },
//   {
//     label: "LINK",
//     value: "link",
//   },
//   {
//     label: "DOT",
//     value: "dot",
//   },
//   {
//     label: "YFI",
//     value: "yfi",
//   },
//   {
//     label: "USD",
//     value: "usd",
//   },
//   {
//     label: "AED",
//     value: "aed",
//   },
//   {
//     label: "ARS",
//     value: "ars",
//   },
//   {
//     label: "AUD",
//     value: "aud",
//   },
//   {
//     label: "BDT",
//     value: "bdt",
//   },
//   {
//     label: "BHD",
//     value: "bhd",
//   },
//   {
//     label: "BMD",
//     value: "bmd",
//   },
//   {
//     label: "BRL",
//     value: "brl",
//   },
//   {
//     label: "CAD",
//     value: "cad",
//   },
//   {
//     label: "CHF",
//     value: "chf",
//   },
//   {
//     label: "CLP",
//     value: "clp",
//   },
//   {
//     label: "CNY",
//     value: "cny",
//   },
//   {
//     label: "CZK",
//     value: "czk",
//   },
//   {
//     label: "DKK",
//     value: "dkk",
//   },
//   {
//     label: "EUR",
//     value: "eur",
//   },
//   {
//     label: "GBP",
//     value: "gbp",
//   },
//   {
//     label: "GEL",
//     value: "gel",
//   },
//   {
//     label: "HKD",
//     value: "hkd",
//   },
//   {
//     label: "HUF",
//     value: "huf",
//   },
//   {
//     label: "IDR",
//     value: "idr",
//   },
//   {
//     label: "ILS",
//     value: "ils",
//   },
//   {
//     label: "INR",
//     value: "inr",
//   },
//   {
//     label: "JPY",
//     value: "jpy",
//   },
//   {
//     label: "KRW",
//     value: "krw",
//   },
//   {
//     label: "KWD",
//     value: "kwd",
//   },
//   {
//     label: "LKR",
//     value: "lkr",
//   },
//   {
//     label: "MMK",
//     value: "mmk",
//   },
//   {
//     label: "MXN",
//     value: "mxn",
//   },
//   {
//     label: "MYR",
//     value: "myr",
//   },
//   {
//     label: "NGN",
//     value: "ngn",
//   },
//   {
//     label: "NOK",
//     value: "nok",
//   },
//   {
//     label: "NZD",
//     value: "nzd",
//   },
//   {
//     label: "PHP",
//     value: "php",
//   },
//   {
//     label: "PKR",
//     value: "pkr",
//   },
//   {
//     label: "PLN",
//     value: "pln",
//   },
//   {
//     label: "RUB",
//     value: "rub",
//   },
//   {
//     label: "SAR",
//     value: "sar",
//   },
//   {
//     label: "SEK",
//     value: "sek",
//   },
//   {
//     label: "SGD",
//     value: "sgd",
//   },
//   {
//     label: "THB",
//     value: "thb",
//   },
//   {
//     label: "TRY",
//     value: "try",
//   },
//   {
//     label: "TWD",
//     value: "twd",
//   },
//   {
//     label: "UAH",
//     value: "uah",
//   },
//   {
//     label: "VEF",
//     value: "vef",
//   },
//   {
//     label: "VND",
//     value: "vnd",
//   },
//   {
//     label: "ZAR",
//     value: "zar",
//   },
//   {
//     label: "XDR",
//     value: "xdr",
//   },
//   {
//     label: "XAG",
//     value: "xag",
//   },
//   {
//     label: "XAU",
//     value: "xau",
//   },
//   {
//     label: "BITS",
//     value: "bits",
//   },
//   {
//     label: "SATS",
//     value: "sats",
//   },
// ];
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
          :value="props.currency"
          :options="currencyOptions"
          placeholder="currency"
          filterable
          :loading="loadingCurrency"
          @update:value="onCurrencyChange"
        />
      </div>
      <!-- <div style="width: 124px">
        <n-select
          :value="props.coin"
          :options="coinOptions"
          placeholder="coin"
          filterable
          :loading="loadingCurrency"
          @update:value="onCoinChange"
        />
      </div> -->
    </div>
    <!-- <select v-model="interval.value" @change="onIntervalChange">
      <option v-for="value in [7, 30, 90]" :key="value" :value="value">
        {{ value }}
      </option>
    </select> -->
  </div>
</template>
<style scoped></style>
