<script setup>
import { NButton, NSelect, NTooltip } from "naive-ui";
import { onMounted, onUnmounted, ref } from "vue";
import { useGeneralStore } from "../../store";
import { mapCurrenciesFromStore } from "../../utils/helper";

const emit = defineEmits(["update:callback"]);

const store = useGeneralStore();
const showRef = ref(false);
const currenciesRef = ref([]);

let intervalId;
const startInterval = (time) => {
  intervalId = setInterval(() => {}, time);
};

const timeRef = ref(5000);
const timeOptions = [
  { label: "5s", value: 5000 },
  { label: "30s", value: 30000 },
  { label: "1 min", value: 60000 },
  { label: "5 min", value: 300000 },
];

const updateHandler = (newTime) => {
  timeRef.value = newTime;
  clearInterval(intervalId);
  startInterval(newTime);
};

onMounted(() => {
  store.fetchCurrencies().then((res) => {
    currenciesRef.value = mapCurrenciesFromStore(res);
  });
  startInterval(timeRef.value);
});

onUnmounted(() => {
  clearInterval(intervalId);
});

const onClick = (_) => {
  showRef.value = !showRef.value;
};
</script>

<template>
  <div style="display: flex; width: 100%; justify-content: space-between">
    <div style="width: 120px">
      <NSelect
        :value="timeRef"
        :options="timeOptions"
        @update:value="updateHandler"
      />
    </div>
    <div style="display: flex">
      <p style="">The CoinGecko API is offline</p>
    </div>
    <NTooltip trigger="hover" placement="top-start">
      <template #trigger>
        <NButton tertiary round type="primary" @click="onClick">
          <svg
            v-if="showRef"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <path d="M8 12.5l6-6H2l6 6z" />
          </svg>
          <svg
            v-else
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <path d="M8 3.5l-6 6h12l-6-6z" />
          </svg>
        </NButton>
      </template>
      {{ `${showRef ? "retract" : "expand"} chart` }}
    </NTooltip>
  </div>
</template>

<style scoped></style>
