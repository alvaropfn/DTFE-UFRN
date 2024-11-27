import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';

import VueApexCharts from "vue3-apexcharts";
const pinia = createPinia()

// import './style.css'

const app = createApp(App)
app.use(VueApexCharts);
app.use(pinia)

app.mount('#app')