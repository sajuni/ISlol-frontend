import Vue from "vue";
import Router from "vue-router";

const LoginOn = () =>
    import ('@/views/session/LoginOn')
const SignUp = () =>
    import ('@/views/session/SignUp')
const Main = () =>
    import ('@/views/Main')
const NoticeList = () => import ('@/views/notice/List')

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
            path: "/notice/list",
            name: "NoticeList",
            component: NoticeList
        }
    ]
});