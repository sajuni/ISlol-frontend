import Vue from "vue";
import Vuex from "vuex";

// modules
import auth from './modules/auth';
import notice from './modules/notice';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    auth,
    notice
  },
})
