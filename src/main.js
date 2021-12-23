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

router.beforeEach((to, from, next) => {
	if (to.matched.some(record => !record.meta.requiresAuth)) {
		if (to.fullPath !== '/') {
			// if (!store.getters['auth/getUser'] || !store.getters['auth/getToken']) {
			// 	alert('다시 로그인 해주세요.');
			// 	store.dispatch('auth/clear');
			// 	next({ name: 'LoginOn' });
			// } else {
			// 	next();
			// }
			if (!localStorage.getItem('user') || !localStorage.getItem('token')) {
				alert('다시 로그인 해주세요.');
				store.dispatch('auth/clear');
				next({ name: 'LoginOn' });
			} else {
				if (!store.getters['auth/getUser'] || !store.getters['auth/getToken']) {
					store.dispatch('auth/setData');
				}
				next();
			}
		} else {
			next();
		}
	} else {
		next();
	}
})


new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount("#app");
