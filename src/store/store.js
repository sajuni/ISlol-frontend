import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from 'vuex-persistedstate';

// modules
import auth from './modules/auth';
import notice from './modules/notice';
import video from './modules/video';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    auth,
    notice,
    video
  },
  plugins: [createPersistedState()]
})
