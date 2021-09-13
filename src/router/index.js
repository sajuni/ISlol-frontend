import Vue from "vue";
import VueRouter from "vue-router";

const LoginOn = () => import('@/views/session/LoginOn');

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "LoginOn",
    component: LoginOn,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
