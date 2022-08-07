import { defHttp } from '@/utils/http/axios';
import { SignUpModel } from '../model/auth/SignUpModel';

enum Api {
  Auth = 'auth',
}

export const loginOn = (req: any): Promise<any> => {
  return defHttp.post<any>({
    url: Api.Auth + '/signin',
    data: req,
  });
};

export const singUp = (req: SignUpModel): Promise<any> => {
  return defHttp.post<any>({
    url: Api.Auth + '/signup',
    params: req,
  });
};
