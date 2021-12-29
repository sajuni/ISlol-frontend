import Vue from "vue";
import Router from "vue-router";
import Notice from "@/router/noitce";

const LoginOn = () =>
    import ('@/views/session/LoginOn')
const SignUp = () =>
    import ('@/views/session/SignUp')
const Main = () =>
    import ('@/views/Main')
const MemberInfo = () => import ('@/views/member/Info')

Vue.use(Router);

export default new Router({
    mode: "history",
    redirect: '/',
    routes: [{
            path: "/",
            name: "LoginOn",
            component: LoginOn,
            meta: {
                layout: "LoginOn",
                requiresAuth: true,
            }
        },
        {
            path: "/sginup",
            name: "SignUp",
            component: SignUp,
            meta: {
                layout: "SignUp",
                requiresAuth: true,
            }
        },
        {
            path: "/main",
            name: "Main",
            component: Main,
        },
        {
            path: "/member/info",
            name: "MemberInfo",
            component: MemberInfo
        },
        ...Notice
    ]
});