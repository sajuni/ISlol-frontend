import { noticeApi } from 'Api';

const state = {
    noticeList: [],
    noticeListEndLength: 0,
    currentPage: 1
}

const getters = {
    getNoticeList: state => {
        return state.noticeList;
    },
    getNoticeListEndLength: state => {
        return state.noticeListEndLength;
    },
    getCurrentPage: state => {
        return state.currentPage;
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
            state.noticeListEndLength = res.data.noticeList.totalElements;
            if (res.data.noticeList.totalPages == 1) {
                state.noticeList.splice(0, state.noticeList.length, ...res.data.noticeList.content);
                return;
            }
            if (state.noticeList.length > 0) {
                state.noticeList.push(...res.data.noticeList.content);
            } else {
                state.noticeList = res.data.noticeList.content;
            }
        }
    },
    setCurrentPage(state, data) {
        state.currentPage = data;
    },
    stateClear(state) {
        state.noticeList = [];
        state.noticeListEndLength = 0;
    },
}

export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations
}