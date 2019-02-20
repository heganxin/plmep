import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/layout/Layout.vue'

Vue.use(Router)
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },
  {
    path: '',
    component: Layout,
    redirect: '/home',
    children: [{
      path: 'home',
      component: () => import('@/views/home/index'),
      name: 'home',
      meta: { title: '首页', icon: 'home', noCache: true }
    }]
  }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
export const asyncRouterMap = [
  {
    path: '/huanbao',
    component: Layout,
    redirect: '/huanbao/index',
    name: 'huanbao',
    meta: { title: '环保', icon: 'issue' },
    children: [
      {
        path: 'huanbaoindex',
        name: 'huanbaoindex',
        component: () => import('@/views/huanbao/index'),
        meta: { title: '环保管理', icon: 'permission' }
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]
