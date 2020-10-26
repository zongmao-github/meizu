import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Main',
        component: () => import("../components/main"),
        redirect: '/home',
        children: [
            {
                path: '/home',
                name: 'Home',
                component: () => import("../views/home/index")
            },
            {
                path: '/about',
                name: 'About',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "about" */ '../views/about/index')
            }
        ]
    },
    {
        path: '/login',
        name: 'name',
        component: () => import('@/views/login/index')
    },
    {
        path: '/404',
        name: '404',
        component: ()=> import('@/views/404')
    },
    {
        path: '403',
        name: '403',
        component: ()=> import('@/views/403')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
