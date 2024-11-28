<script setup>
import PAC from "../components/charts/PAC.vue";
import VATR from "../components/charts/VATR.vue";
import VPV from "../components/charts/VPV.vue";
</script>

<template>
  <div style="display: grid; justify-content: center">
    <div style="display: flex; flex-direction: column">
      <h1>Dashboard</h1>
      <PAC />
      <VATR />
      <VPV />
    </div>
  </div>
</template>

<style scoped></style>
