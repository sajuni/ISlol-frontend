import { noticeApi } from 'Api';

const state = {
    noticeList: {}
}

const getters = {
    getNoticeList: state => {
        return state.noticeList;
    }
}

const actions = {
    getAllList(context, pageable) {
        return noticeApi.getAllList(pageable)
            .then(res => {
                context.commit('getAllListSuccess', res);
            }) 
            .catch(err => {
                console.log('error', err);
            })
    }
}

const mutations = {
    getAllListSuccess(state, res) {
        if (res.resultCode === '0000') {
            state.noticeList = res.data.noticeList.content;
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