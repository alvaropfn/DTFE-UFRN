<script setup>
import { ref } from 'vue'
import { NSelect } from 'naive-ui'
const props = defineProps({
  interval: {
    type: Number,
    required: true
  },
  // currency: String, // [USD, USDT...]
  // coin: {
  //   type: String,
  // }, // [bitcoin, ethereum, solana]
})

const selectedValue = ref(null)
const emit = defineEmits(['update:interval'])

const onIntervalChange = (_, value) => {
  emit('update:interval', value)
}

const options = [
  {
    label: 7,
    value: 7
  },
  {
    label: 30,
    value: 30
  },
  {
    label: 90,
    value: 90
  },
]


</script>
<template>
  <div>
    <label for="">dias: </label>
    <div style="width: 84px;">
      <n-select :value="props.interval" :options="options" placeholder="days" @update:value="onIntervalChange" />
    </div>
    <!-- <select v-model="interval.value" @change="onIntervalChange">
      <option v-for="value in [7, 30, 90]" :key="value" :value="value">
        {{ value }}
      </option>
    </select> -->

  </div>
</template>
<style scoped></style>