import { defineStore } from 'pinia';
import pinia from '@/store';
import { loginOn, singUp } from '@/service/auth/api/auth';
import { SignUpModel } from '../model/auth/SignUpModel';
import { LoginModel } from '../model/auth/LoginModel';
import { LoginStatus } from '../model/auth/LoginStatus';

interface authSate {
  loginInfo: LoginStatus;
}

const authStore = defineStore({
  id: 'auth',
  state: (): authSate => ({
    loginInfo: {
      name: '',
      nick: '',
      token: '',
      refreshToken: '',
      roles: '',
    },
  }),

  actions: {
    setLoginInfo(data: LoginStatus) {
      this.loginInfo = data;
    },

    async getLoginOn(req: LoginModel): Promise<LoginStatus> {
      try {
        const data = await loginOn(req);
        this.setLoginInfo(data);
      } catch (err) {
        return Promise.reject(err);
      }

      return loginOn(req);
    },
    async singUp(req: SignUpModel): Promise<any> {
      try {
        const data = await singUp(req);
        return data;
      } catch (err) {
        return Promise.reject(err);
      }
    },
  },
});

export function useAuthStore() {
  return authStore(pinia);
}
