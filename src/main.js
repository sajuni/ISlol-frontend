import Vue from "vue"
import App from "@/App.vue"
import router from "@/router"
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import '@/assets/scss/common.scss'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Notifications from 'vue-notification'
import velocity from 'velocity-animate'
import '@/plugins/global-components'
import { store } from "@/store/store"
import '@/assets/scss/_index.scss'
import SimpleVueValidation from 'simple-vue-validator';

SimpleVueValidation.extendTemplates({ 
    required: '필수 입력 항목입니다.', 
    length: '길이가 {0} 이어야 합니다.', 
    minLength: '{0} 글자 이상이어야 합니다.', 
    maxLength: '{0} 글자 이하여야 합니다.', 
    digit: '숫자만 입력해주세요.' ,
    match: '비밀번호가 같지 않음.'
})


Vue.use(SimpleVueValidation);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.config.productionTip = false;
Vue.use(Notifications, { velocity });

router.beforeEach((to, from, next) => {
	if (to.matched.some(record => !record.meta.requiresAuth)) {
		if (!store.getters['auth/getUser'] || !store.getters['auth/getToken']) {
			alert('다시 로그인 해주세요.');
			store.dispatch('auth/clear');
			next({ name: 'LoginOn' });
		} else {
			next();
		}
	} else {
		if (store.getters['auth/getUser'] || store.getters['auth/getToken']) {
			next({ name: "Main" });
		} else {
			next();
		}
	}
})

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount("#app");
