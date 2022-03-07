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
import CKEditor from 'ckeditor4-vue';

Vue.use(CKEditor);
SimpleVueValidation.extendTemplates({ 
    required: '필수 입력 항목입니다.', 
    length: '길이가 {0} 이어야 합니다.', 
    minLength: '{0} 글자 이상이어야 합니다.', 
    maxLength: '{0} 글자 이하여야 합니다.', 
    digit: '숫자만 입력해주세요.' ,
    match: '비밀번호가 같지 않음.'
})
const portNum = 8180;
Vue.prototype.$portNum = portNum;

Vue.use(SimpleVueValidation);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.config.productionTip = false;
Vue.use(Notifications, { velocity });

router.beforeEach((to, from, next) => {
	
	// 로그인 페이지 접근
	if (to.fullPath == "/") {
		// 토큰 확인 후 메인으로 이동
		if (store.getters['auth/getToken']) {
			next({ name: "Main" });
		} else {
			next({
				path: '/',
				query: { redirect: '' }
			})
		}
	// 로그인 페이지 외 접근
	} else {
		// 권한 필요 페이지 체크
		if (to.matched.some(record => record.meta.requiresAuth)) {
			// 토큰 확인 후 정상 동작
			if (store.getters["auth/getToken"]) {
				next();
			// 토큰 없으면 로그인 페이지로 튕김
			} else {
				alert("다시 로그인 해주세요.");
				next({
					path: '/',
					query: { redirect: '' }
				})
				// next('/');
			}
			// 권한 필요 페이지 아니면 정상 동작
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
