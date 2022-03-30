import { kakaoApi } from 'Api';

const state = {
  location: null,
};

const getters = {
  getLocation: (state) => {
    return state.location;
  },
};

const actions = {
  getData(context, payload) {
    return kakaoApi
      .getLocation(payload)
      .then((res) => {
        context.commit('getDataSuccess', res);
      })
      .catch((err) => {
        console.log('err', err);
      });
  },
};

const mutations = {
  getDataSuccess(state, res) {
    let location = res.data.documents[0].address;
    state.location = `${location.region_1depth_name} ${location.region_2depth_name} ${location.region_3depth_name}`;
  },
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};
