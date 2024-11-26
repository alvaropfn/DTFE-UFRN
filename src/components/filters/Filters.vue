<script setup>
const props = defineProps({
  interval: {
    type: Object,
    required: true
  },
  // currency: String, // [USD, USDT...]
  // coin: {
  //   type: String,
  // }, // [bitcoin, ethereum, solana]
})

const emit = defineEmits(['update:interval'])

const onIntervalChange = (event) => {
  emit('update:interval', event.target.value)
}

const onUpdate = (value) => {
  console.log(value)
}
</script>
<template>
  <div>
    <label for="">dias: </label>
    <select v-model="interval.value" @change="onIntervalChange">
      <option v-for="value in [7, 30, 90]" :key="value" :value="value">
        {{ value }}
      </option>
    </select>
  </div>
</template>
<style scoped></style>