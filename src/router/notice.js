const NoticeDetail = () => import('@/views/notice/Detail');
const NoticeList = () => import('@/views/notice/List');
const NoticeSave = () => import('@/views/notice/Save');
const NoticeUpdate = () => import('@/views/notice/Update');

const notice = [
  {
    path: '/notice/list',
    name: 'NoticeList',
    component: NoticeList,
    props: true,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/notice/detail/:id',
    name: 'NoticeDetail',
    component: NoticeDetail,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/notice/save',
    name: 'NoticeSave',
    component: NoticeSave,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/notice/update/:id',
    name: 'NoticeUpdate',
    component: NoticeUpdate,
    meta: {
      requiresAuth: true,
    },
  },
];

export default notice;
