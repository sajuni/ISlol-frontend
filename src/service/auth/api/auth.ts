import { defHttp } from '@/utils/http/axios';
import { LoginStatus } from '../model/LoginStatus';
import { SignInModel } from '../model/SignInModel';
import { SignUpModel } from '../model/SignUpModel';

enum Api {
  Auth = 'auth',
}

export const singIn = (req: SignInModel): Promise<LoginStatus> => {
  return defHttp.post<LoginStatus>({
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
