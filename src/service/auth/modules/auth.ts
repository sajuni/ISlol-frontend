import { defineStore } from 'pinia';
import pinia from '@/store';
import { singIn, singUp } from '@/service/auth/api/auth';
import { SignUpModel } from '../model/SignUpModel';
import { SignInModel } from '../model/SignInModel';
import { LoginStatus } from '../model/LoginStatus';

interface authSate {
  signInfo: LoginStatus;
}

const authStore = defineStore({
  id: 'auth',
  state: (): authSate => ({
    signInfo: {
      id: '',
      email: '',
      mobileNum: '',
      seq: '',
      type: '',
      name: '',
      nick: '',
      token: '',
      refreshToken: '',
      roles: [],
    },
  }),

  actions: {
    setSignInfo(data: LoginStatus) {
      this.signInfo = data;
    },

    async signIn(req: SignInModel): Promise<LoginStatus> {
      try {
        const data = await singIn(req);
        this.setSignInfo(data);
        return data;
      } catch (err) {
        return Promise.reject(err);
      }
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
