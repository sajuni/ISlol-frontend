import { noticeApi } from 'Api';
import Vue from 'vue';

const state = {
  noticeList: [],
  noticeListEndLength: 0,
  currentPage: 1,
  savedNoticeSeq: 0,
};

const getters = {
  getNoticeList: (state) => {
    return state.noticeList;
  },
  getNoticeListEndLength: (state) => {
    return state.noticeListEndLength;
  },
  getCurrentPage: (state) => {
    return state.currentPage;
  },
  getNoticeDetail: (state) => (seq) => {
    return state.noticeList.filter((v) => seq.id == v.noticeSeq)[0];
  },
  getSavedNoticeSeq: (state) => {
    return state.savedNoticeSeq;
  },
};

const actions = {
  getList(context, pageable) {
    return noticeApi
      .getList(pageable)
      .then((res) => {
        context.commit('getListSuccess', res);
      })
      .catch((err) => {
        console.log('error', err);
      });
  },
  stateClear(context) {
    return context.commit('stateClear');
  },
  save(context, payload) {
    return noticeApi
      .save(payload)
      .then((res) => {
        context.commit('saveSuccess', res);
      })
      .catch((err) => {
        console.log('error', err);
      });
  },
  getDetail(context, id) {
    return noticeApi
      .getDetail(id)
      .then((res) => {
        context.commit('detailSuccess', res);
      })
      .catch((err) => {
        console.log('error', err);
      });
  },
};

const mutations = {
  getListSuccess(state, res) {
    if (res.resultCode === '0000') {
      // 세이브 시
      if (res.data.noticeList.totalElements == state.noticeListEndLength + 1) {
        state.noticeListEndLength++;
        state.noticeList = res.data.noticeList.content;
        return;
      }
      state.noticeListEndLength = res.data.noticeList.totalElements;
      if (res.data.noticeList.totalPages == 1) {
        state.noticeList.splice(
          0,
          state.noticeList.length,
          ...res.data.noticeList.content
        );
        return;
      }
      // 더 가져왔을 때(페이징)
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
  saveSuccess(state, res) {
    if (res.resultCode === '0000') {
      Vue.notify({
        group: 'loggedIn',
        type: 'success',
        text: '공지사항 등록에 성공했습니다.',
      });
      state.savedNoticeSeq = res.data.saveEntity.noticeSeq;
    }
  },
  //   detailSuccess(state, res) {},
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};
