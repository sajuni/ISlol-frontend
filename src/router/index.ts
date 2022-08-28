import Vue from 'vue';
import VueRouter from 'vue-router';
import SignIn from '@/views/auth/SignIn.vue';
import auth from '@/router/routes/auth/index';
import main from './routes/main';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'SignIn',
    component: SignIn,
    meta: { layout: 'Main' },
  },
  ...auth,
  ...main,
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
