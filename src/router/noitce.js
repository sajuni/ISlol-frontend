const Detail = () => import ("@/views/notice/Detail")
const NoticeList = () => import('@/views/notice/List')
const Save = () => import ("@/views/notice/Save")

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
    {
        path: "/notice/save",
        name: "NoticeSave",
        component: Save,
        meta: {
            requiresAuth: true,
        }
    },
]

export default notice;