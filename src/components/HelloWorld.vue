<script setup>
import { ref } from 'vue'
import { getCoinsList } from '../services/api'

defineProps({
  msg: String,
})

const count = ref(0)

</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <button type="button" @click="getCoinsList">
      getCoinsList
    </button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
