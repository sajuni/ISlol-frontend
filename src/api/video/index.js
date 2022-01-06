import commonApi from '@/api/common/commonApi';

const common = new commonApi('video');

const videoApi = {
    getList: () => {
        return common.get(common.config.VIDEO_URL + 'list');
    },

}

export default videoApi;