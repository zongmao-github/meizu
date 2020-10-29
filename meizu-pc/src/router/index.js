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
                //首页
                path: '/home',
                name: 'Home',
                component: () => import("../views/home/index")
            },
            {
                //关于
                path: '/about',
                name: 'About',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "about" */ '../views/about/index')
            },
            {
                //详情
                path: '/detail',
                name: 'detail',
                component: ()=> import('@/views/detail/index')
            },
            {
                //购物车
                path: '/shopCar',
                name: 'shopCar',
                component: ()=> import('@/views/shopCar/index')
            },
            {
                //订单
                path: '/order',
                name: 'order',
                component: ()=> import('@/views/order/index')
            }
        ]
    },
    {
        //登录页
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
    },
    {
        path: '*',
        name: '404',
        redirect: '/404'
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
