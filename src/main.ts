import { createPinia } from 'pinia';
import { createApp } from 'vue';
import router from '@/router';
import App from './App.vue';

// const vuetify = createVutify({});
const pinia = createPinia();
const app = createApp(App);

app.use(pinia).use(router).mount('#app');
