import { defineStore } from "pinia"
import { computed, ref } from 'vue'

export const useCoinStore = defineStore('counter', () => {
  const coins = ref([])
  const getCoins = computed(()=>{
    return []
  })
  const fetchCoins = (query) => {
    console.log(query);
    return query
  }

  return {coins, getCoins, fetchCoins}
})