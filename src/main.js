import Vue from 'vue';
import App from './App.vue';
import router from './router';
import pinia from './store';
import vuetify from './plugins/vuetify';

import { PiniaVuePlugin } from 'pinia';
import VueCompositionAPI from '@vue/composition-api';
Vue.use(PiniaVuePlugin);
Vue.use(VueCompositionAPI);
Vue.config.productionTip = false;

new Vue({
  router,
  pinia,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
