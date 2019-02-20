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
    path: '/Mytasks',
    component: Layout,
    redirect: '/Mytasks',
    children: [{
      path: 'Mytasks',
      component: () => import('@/views/fengyang/Mytasks'),
      name: 'Mytasks',
      meta: { title: '我的任务', icon: 'home', noCache: true }
    }]
  },
  {
    path: '/fengyang',
    component: Layout,
    redirect: '/fengyang/index',
    name: 'fengyang',
    meta: { title: '封样', icon: 'issue' },
    children: [
      {
        path: 'Mytasks',
        name: 'Mytasks',
        component: () => import('@/views/fengyang/Mytasks'),
        meta: { title: 'fengyangRoute.myTasks', icon: 'permission' }
      },
      {
        path: 'under_review',
        name: 'under_review',
        component: () => import('@/views/fengyang/Under_Review'),
        meta: { title: 'fengyangRoute.under_review', icon: 'permission' }
      },
      {
        path: 'sealed_Sample',
        name: 'sealed_Sample',
        component: () => import('@/views/fengyang/Sealed_Sample'),
        meta: { title: 'fengyangRoute.sealed_Sample', icon: 'permission' }
      }
    ]
  }, {
    path: '/huanbao',
    component: Layout,
    redirect: '/huanbao/index',
    name: 'huanbao',
    meta: { title: '环保', icon: 'issue' },
    children: [
      {
        path: 'Mytasks',
        name: 'Mytasks',
        component: () => import('@/views/huanbao/Mytasks'),
        meta: { title: 'huanbaoRoute.myTasks', icon: 'permission' }
      },
      {
        path: 'Material_submitted',
        name: 'Material_submitted',
        component: () => import('@/views/huanbao/Material_submitted'),
        meta: { title: 'huanbaoRoute.Material_submitted', icon: 'permission' }
      },
      {
        path: 'Material_Search',
        name: 'Material_Search',
        component: () => import('@/views/huanbao/Material_Search'),
        meta: { title: 'huanbaoRoute.Material_Search', icon: 'permission' }
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]
