import Vue from "vue";
import Router from "vue-router";
import Notice from "@/router/notice";
import Admin from "@/router/admin";
import Photo from '@/router/photo';

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
            }
        },
        {
            path: "/sginup",
            name: "SignUp",
            component: SignUp,
            meta: {
                layout: "SignUp",
            }
        },
        {
            path: "/main",
            name: "Main",
            component: Main,
            meta: {
                requiresAuth: true,
            }
        },
        {
            path: "/member/info",
            name: "MemberInfo",
            component: MemberInfo,
            meta: {
                requiresAuth: true,
            }
        },
        ...Notice,
        ...Admin,
        ...Photo
    ]
});