<script setup>
import { NButton, NSelect, NTooltip } from "naive-ui";
import { ref } from "vue";

const emit = defineEmits(["update:time"]);

const showRef = ref(false);

const props = defineProps({
  timeRef: Number,
  timeOptions: {
    type: Array,
    required: true,
  },
});

const updateTime = (newTime) => {
  emit("update:time", newTime);
};

const onClick = (_) => {
  showRef.value = !showRef.value;
};
</script>

<template>
  <div style="display: flex; width: 100%; justify-content: space-between">
    <div style="width: 120px">
      <NSelect
        :value="props.timeRef"
        :options="props.timeOptions"
        @update:value="updateTime"
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
