import { defHttp } from '@/utils/http/index';

const Api = {
  Auth: 'user/auth/',
};

export const loginOn = (req) => {
  return defHttp.post({
    url: Api.Auth + 'signin',
    params: { ...req },
  });
};
