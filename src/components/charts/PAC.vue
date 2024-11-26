<script setup>
import { onMounted, onUpdated, reactive } from 'vue'
const options = {
  chart: {
    id: 'vuechart-example'
  },
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
  }
}

const series = [{
  name: 'series-1',
  data: [30, 40, 45, 50, 49, 60, 70, 91]
}]

const add = () => {

  options.series[0].data.push(111)
  options.series[1].data.push(50)
  options.xaxis.categories.push(2000)
}


</script>

<template>
  <div>
    <h1>PAC</h1>
    <apexchart width="500" type="bar" :options="options" :series="series"></apexchart>
    <button @click="add">add</button>
  </div>
</template>

<style scoped>

</style>