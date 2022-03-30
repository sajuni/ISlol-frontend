const Admin = () => import('@/views/admin/Admin');

const admin = [
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta: {
      requiresAuth: true,
      layout: 'Admin',
    },
  },
];

export default admin;
