import { createRouter, createWebHistory } from 'vue-router';
import auth from '@/router/routes/auth/index';
import main from './routes/main';
import { setupRouterGuard } from './guard';

const routes = [
  {
    path: '/',
    name: 'SignIn',
    component: () => import('@/views/auth/SignIn.vue'),
    // meta: { layout: 'Main' },
  },
  ...auth,
  ...main,
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

setupRouterGuard(router);

export default router;
