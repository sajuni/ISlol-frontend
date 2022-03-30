import commonApi from '@/api/common/commonApi';

const common = new commonApi('media');

const mediaApi = {
  getList: () => {
    return common.get(common.config.MEDIA_URL);
  },
};

export default mediaApi;
