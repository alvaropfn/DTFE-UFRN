<script setup>
import { onMounted } from 'vue'
import ApexCharts from 'apexcharts'
var options = {
  chart: {
    type: 'line'
  },
  series: [{
    name: 'sales',
    data: [30,40,35,50,49,60,70,91,125]
  }],
  xaxis: {
    categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
  }
}

var chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();

onMounted(() => {
  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();
})
</script>

<template>
  <h1>PAC</h1>
  <div id="chart"></div>
</template>

<style scoped>
#chart {
  width: 100%;
  height: 350px;
}
</style>