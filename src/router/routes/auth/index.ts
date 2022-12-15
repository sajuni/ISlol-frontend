const SignUp = () => import('@/views/auth/SignUp.vue');

export default [
  {
    path: '/auth/signup',
    name: 'SignUp',
    component: SignUp,
  },
];
