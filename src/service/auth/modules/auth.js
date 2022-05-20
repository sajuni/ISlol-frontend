import { defineStore } from 'pinia';
import pinia from '@/store';
import { loginOn } from '@/service/auth/api/auth';

const authStore = defineStore({
  id: 'auth',
  state: () => ({
    loginInfo: {},
  }),

  actions: {
    getLoginOn(req) {
      this.loginInfo = {};
      return loginOn(req);
    },
  },
});

export function useAuthStore() {
  return authStore(pinia);
}
