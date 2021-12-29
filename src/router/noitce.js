const Detail = () => import ("@/views/notice/Detail")
const NoticeList = () => import('@/views/notice/List')

const notice = [
    {
        path: "/notice/list",
        name: "NoticeList",
        component: NoticeList
    },
    {
        path: "/notice/detail",
        name: "Detail",
        component: Detail
    },
]

export default notice;