import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import '@/assets/scss/common.scss'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Notifications from 'vue-notification'
import velocity from 'velocity-animate'

import { store } from "@/store/store";

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false;
Vue.use(Notifications, { velocity });

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
