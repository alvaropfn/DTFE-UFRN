<script setup>
import { NSelect } from "naive-ui";
import { onMounted, onUnmounted, ref } from "vue";

let intervalId;
const startInterval = (time) => {
  intervalId = setInterval(() => {
    store.fetchCoins("success");
  }, time);
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
  store.fetchCoins("success - 0");
  startInterval(timeRef.value);
});
onUnmounted(() => {
  console.log("unmounted");
  clearInterval(intervalId);
});
</script>

<template>
  <div>
    <div style="width: 120px">
      <NSelect
        :value="timeRef"
        :options="timeOptions"
        @update:value="updateHandler"
      />
    </div>
  </div>
</template>

<style scoped></style>
