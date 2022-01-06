import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from 'vuex-persistedstate';

// modules
import auth from './modules/auth';
import notice from './modules/notice';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    auth,
    notice
  },
  plugins: [createPersistedState()]
})
