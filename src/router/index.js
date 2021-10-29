import Vue from "vue";
import Router from "vue-router";

const LoginOn = () => import('@/views/session/LoginOn');
const SignUp = () => import('@/views/session/SignUp');

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "LoginOn",
      component: LoginOn,
    },
    {
      path: "/sginup",
      name: "SignUp",
      component: SignUp
    }
  ]
});
