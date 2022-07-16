import { defHttp } from '@/utils/http/axios';
import { SignUpModel } from '../model/SignUpModel';

enum Api {
  Auth = 'auth',
}

export const loginOn = (req: any): Promise<any> => {
  console.log('ree', req);
  return defHttp.post<any>({
    url: Api.Auth + '/signin',
    params: { req },
  });
};

export const singUp = (req: SignUpModel): Promise<any> => {
  return defHttp.post<any>({
    url: Api.Auth + '/signup',
    params: req,
  });
};
