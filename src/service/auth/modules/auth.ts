import { defineStore } from 'pinia';
import pinia from '@/store';
import { loginOn, singUp } from '@/service/auth/api/auth';
import { SignUpModel } from '../model/SignUpModel';

const authStore = defineStore({
  id: 'auth',
  state: () => ({
    loginInfo: {},
  }),

  actions: {
    getLoginOn(req: any): Promise<any> {
      this.loginInfo = {};
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
