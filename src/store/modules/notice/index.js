import { noticeApi } from 'Api';

const state = {
    noticeList: [],
    noticeListEndLength: 0
}

const getters = {
    getNoticeList: state => {
        return state.noticeList;
    },
    getNoticeListEndLength: state => {
        return state.noticeListEndLength;
    }
}

const actions = {
    getList(context, pageable) {
        return noticeApi.getList(pageable)
            .then(res => {
                context.commit('getListSuccess', res);
            }) 
            .catch(err => {
                console.log('error', err);
            })
    },
    stateClear(context, payload) {
        return context.commit('stateClear');
    }
}

const mutations = {
    getListSuccess(state, res) {
        if (res.resultCode === '0000') {
            if (state.noticeList.length > 0) {
                state.noticeList.push(...res.data.noticeList.content);
            } else {
                state.noticeList = res.data.noticeList.content;
            }
            state.noticeListEndLength = res.data.noticeList.totalElements;
        }
    },
    stateClear(state) {
        state.noticeList = [];
        state.noticeListEndLength = 0;
    }
}

export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations
}