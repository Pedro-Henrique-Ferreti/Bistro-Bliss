import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { register } from 'swiper/element/bundle';

import App from './App.vue';
import router from './router';

import './assets/css/main.css';

register();

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
