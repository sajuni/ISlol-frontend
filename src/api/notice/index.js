import commonApi from '@/api/common/commonApi';

const common = new commonApi('notice');

const noticeApi = {
  getList: (pageable) => {
    return common.post(common.config.NOTICE_URL, pageable);
  },
  save: (payload) => {
    return common.post(common.config.NOTICE_URL + 'save', payload);
  },
  getDetail: (id) => {
    return common.get(common.config.NOTICE_URL + `${id}`);
  },
};

export default noticeApi;
