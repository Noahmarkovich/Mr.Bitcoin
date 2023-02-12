import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '../pages/HomeView.vue'
import ContactIndex from '../pages/contact-index.vue'
import ContactDetails from '../pages/contact-details.vue'
// import CarEdit from '../pages/car-edit.vue'

const routerOptions = {
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: HomeView,
        },
        {
            path: '/contact',
            component: ContactIndex,
        },
        {
            path: '/contact/:_id',
            component: ContactDetails,
        },
        // {
        //     path: '/car/edit/:_id?',
        //     component: CarEdit,
        // },
        {
            path: '/about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../pages/AboutView.vue'),
        },
    ],
}
const router = createRouter(routerOptions)

export default router
