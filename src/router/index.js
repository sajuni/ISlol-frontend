import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginOn from '@/views/auth/LoginOn.vue';
import auth from '@/router/routes/auth/index';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'LoginOn',
    component: LoginOn,
  },
  ...auth,
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
