import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

// vuex 대신 pinia 사용
// https://velog.io/@eggplantiny/Pinia-Vuex-%EB%A5%BC-%EB%8C%80%EC%B2%B4%ED%95%A0-%EC%83%88%EB%A1%9C%EC%9A%B4-Store
// https://github.com/kiaking/rfcs/blob/vuex-5/active-rfcs/0000-vuex-5.md
const pinia = createPinia();

pinia.use(piniaPluginPersistedstate); // pinia persiste. defatult localstorage

export default pinia;
