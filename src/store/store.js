import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from 'vuex-persistedstate';

// modules
import auth from './modules/auth';
import notice from './modules/notice';
import media from './modules/media';
import kakao from './modules/kakao';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    auth,
    notice,
    media,
    kakao
  },
  plugins: [createPersistedState()]
})
