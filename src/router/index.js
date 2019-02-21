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
    path: '/fMytasks',
    component: Layout,
    redirect: '/fMytasks',
    meta: { title: 'fengyangRoute.myTasks', icon: 'issue' },
    children: [{
      path: 'fMytasks',
      component: () => import('@/views/fengyang/Mytasks'),
      name: 'fMytasks',
      meta: { title: 'fengyangRoute.myTasks', icon: 'issue' }
    }]
  },
  {
    path: '/hMytasks',
    component: Layout,
    redirect: '/hMytasks',
    meta: { title: 'huanbaoRoute.myTasks', icon: 'user' },
    children: [{
      path: 'hMytasks',
      component: () => import('@/views/huanbao/Mytasks'),
      name: 'hMytasks',
      meta: { title: 'huanbaoRoute.myTasks', icon: 'user', noCache: true }
    }]
  },
  {
    path: '/submitted',
    component: Layout,
    redirect: '/submitted',
    meta: { title: 'huanbaoRoute.Material_submitted', icon: 'dashboard' },
    children: [{
      path: 'submitted',
      component: () => import('@/views/huanbao/Material_submitted'),
      name: 'submitted',
      meta: { title: 'huanbaoRoute.Material_submitted', icon: 'issue', noCache: true }
    }]
  },
  {
    path: '/search',
    component: Layout,
    redirect: '/search',
    meta: { title: 'huanbaoRoute.Material_Search', icon: 'dashboard' },
    children: [{
      path: 'search',
      component: () => import('@/views/huanbao/Material_Search'),
      name: 'search',
      meta: { title: 'huanbaoRoute.Material_Search', icon: 'dashboard', noCache: true }
    }]
  },
  { path: '*', redirect: '/404', hidden: true }
]
