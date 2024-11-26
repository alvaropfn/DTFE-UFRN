<script setup>
import { onMounted, onUpdated, reactive } from 'vue'
import { getCoinTickersById, getExchangesList } from '../../services/api'

const series = reactive([{
  name: 'series-1',
  data: [30, 40, 45, 50, 49, 60, 70, 91]
}])

const options = reactive({
  chart: {
    id: 'vuechart-example'
  },
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
  }
})

const dataRef = reactive({})

const add = () => {
  // Add random number between 30 and 100 to series data
  series[0].data.push(Math.floor(Math.random() * 100))

  // Get last year and add next year to categories
  const lastYear = options.xaxis.categories[options.xaxis.categories.length - 1]
  options.xaxis.categories.push(lastYear + 1)
}

const getCoins = () => {
  getCoinTickersById({id: 'bitcoin', dataRef})
}

const getExchanges = () =>{
  getExchangesList()
}

const filterExchanges = () => {
  
  console.log()
}

</script>

<template>
  <div>
    <h4>PAC</h4>
    <apexchart width="500" type="bar" :options="options" :series="series"></apexchart>
    <button @click="add">add</button>
    <button @click="getCoins">get coins</button>
    <button @click="getExchanges">get exchanges</button>
  </div>
</template>

<style scoped>

</style>