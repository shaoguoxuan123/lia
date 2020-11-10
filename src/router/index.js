import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  //实现二级路由页面
  {
    path: '/',
    redirect: '/Home'
  },
  //当前页面
  {
    path: '/Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
    children: [
      //首页
      {
        path: '/Home/Shou',
        component: () => import(/* webpackChunkName: "about" */ '../views/Shou.vue'),
      },
      //发现页
      {
        path: '/Home/Fing',
        component: () => import(/* webpackChunkName: "about" */ '../views/Fing.vue'),
      },
      //购物车页
      {
        path: '/Home/Car',
        component: () => import(/* webpackChunkName: "about" */ '../views/Car.vue'),
      },
      //我的页面
      {
        path: '/Home/My',
        component: () => import(/* webpackChunkName: "about" */ '../views/My.vue'),
      },
      {
        path: '/Home/Login',
        component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
