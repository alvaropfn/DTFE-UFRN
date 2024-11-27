import { defineStore } from "pinia"
import { computed, ref } from 'vue'

export const use_Store = defineStore('counter', () => {
  const _ = ref([])
  const get_ = computed(()=>{
    return []
  })
  const fetchCoins = (query) => {
    console.log(query);
    return query
  }

  return {_, get_, fetch_}
})