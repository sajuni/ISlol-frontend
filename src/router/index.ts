import Vue from 'vue';
import VueRouter from 'vue-router';
import SignIn from '@/views/auth/SignIn.vue';
import auth from '@/router/routes/auth/index';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'SignIn',
    component: SignIn,
  },
  ...auth,
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
