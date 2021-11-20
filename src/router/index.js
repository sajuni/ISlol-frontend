import Vue from "vue";
import Router from "vue-router";

const LoginOn = () =>
    import ('@/views/session/LoginOn')
const SignUp = () =>
    import ('@/views/session/SignUp')
const Main = () =>
    import ('@/views/Main')

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [{
            path: "/",
            name: "LoginOn",
            component: LoginOn,
            meta: { layout: "LoginOn" }
        },
        {
            path: "/sginup",
            name: "SignUp",
            component: SignUp,
            meta: { layout: "SignUp" }
        },
        {
            path: "/main",
            name: "Main",
            component: Main
        }
    ]
});