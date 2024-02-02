import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import UUID from "vue-uuid";

const app = createApp(App);

app.use(UUID);
app.mount('#app');



