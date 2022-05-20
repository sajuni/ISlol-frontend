const SignIn = () => import('@/views/auth/SignIn.vue');

export default [
  {
    path: '/auth/signin',
    name: 'SignIn',
    component: SignIn,
  },
];
