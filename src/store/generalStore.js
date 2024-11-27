import { defineStore } from "pinia"
import { computed } from "vue"
import { getSupportedCurrencies } from "../services/api"
import { getStorage, updateStorage } from "../utils/cache"


export const useGeneralStore = defineStore('generalStore', () => {
  const getCoins = computed(()=>{
    return []
  })

  const fetchCoins = () => {}

  const fetchCurrencies = async () => {
    const key = 'currencies'
    const data = await getSupportedCurrencies()
    await updateStorage(key, data)
    return await getStorage(key)
  }

  return {getCoins, fetchCoins, fetchCurrencies}
})