import { videoApi } from "Api";

const state = {
    videoList: []
}

const getters = {
    getVideoList: state => {
        return state.videoList;
    }
}

const actions = {
    getList(context) {
        return videoApi.getList()
            .then(res => {
                context.commit('getListSuccess', res);
            })
            .catch(err => {
                console.log('errer', err);
            })
    }
}

const mutations = {
    getListSuccess(state, res) {
        if (res.resultCode === '0000') {
            state.videoList = res.data.videoList;
        }
    }
}

export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations
}