import { defineStore } from "pinia"
import { computed } from "vue"
import { getCoinsList, getHistoryById, getSimplePrice, getSupportedCurrencies } from "../services/api"
import { getStorage, updateStorage } from "../utils/cache"


export const useGeneralStore = defineStore('generalStore', () => {
  const getCoins = computed(async ()=>{
    return await getStorage('coinsList')
  })

  const fetchCoins = async () => {
    const key = 'coinsList'
    const data = await getCoinsList()
    await updateStorage(key, data)
    return await getStorage(key)
  }

  const fetchCurrencies = async () => {
    const key = 'currencies'
    const data = await getSupportedCurrencies()
    await updateStorage(key, data)
    return await getStorage(key)
  }

  const fetchHistoryById = async ({id, query}) => {
    const key = `history:${id}-${query.currency}`
    const data = await getHistoryById({id, query})
    await updateStorage(key, data)
    return await getStorage(key)
  }

  const fetchSimplePrice = async ({id, query}) => {
    const key = `${id}-${query.currency}`
    const data = await getSimplePrice({id, query})
    await updateStorage(key, data)
    return await getStorage(key)
  }

  return { 
    getCoins,
    fetchCoins,
    fetchCurrencies,
    fetchHistoryById,
    fetchSimplePrice,
  }
})