import { Router } from 'vue-router';

// 라이터 이동 전 체크
export function setupRouterGuard(router: Router): void {
  createPermissionGuard(router);
}

// 사용자 로그인 여부에 따른 처리
function createPermissionGuard(router: Router): void {
  router.beforeEach((to, from, next) => {
    console.log('to', to);
    console.log('from', from);
    next();
  });
}
