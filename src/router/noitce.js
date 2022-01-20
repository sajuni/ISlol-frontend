const Detail = () => import ("@/views/notice/Detail")
const NoticeList = () => import('@/views/notice/List')

const notice = [
    {
        path: "/notice/list",
        name: "NoticeList",
        component: NoticeList,
        props: true,
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: "/notice/detail/:id",
        name: "Detail",
        component: Detail,
        meta: {
            requiresAuth: true,
        }

    },
]

export default notice;