const PhotoList = () => import("@/views/photo/List")

const photo = [
    {
        path: '/photo/list',
        name: 'PhotoList',
        component: PhotoList,
        meta: {
            requiresAuth: true,
        }

    }
]
export default photo;
