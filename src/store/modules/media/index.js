import { mediaApi } from "Api";

const state = {
    videoList: [],
    imageList: []
}

const getters = {
    getvideoList: state => {
        return state.videoList;
    },
    getimageList: state => {
        return state.imageList;
    }
}

const actions = {
    getList(context) {
        return mediaApi.getList()
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
            state.imageList = res.data.imageList;
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