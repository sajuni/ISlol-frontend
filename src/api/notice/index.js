import commonApi from '@/api/common/commonApi';

const common = new commonApi('notice');

const noticeApi = {
    getList: (pageable) => {
        return common.post(common.config.NOTICE_URL + 'all/list', pageable);
    },

}

export default noticeApi;