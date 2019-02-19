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
  // {
  //   path: '/permission',
  //   component: Layout,
  //   redirect: '/permission/users',
  //   name: 'Permission',
  //   meta: { title: '权限管理', icon: 'permission' },
  //   children: [
  //     {
  //       path: 'users',
  //       name: 'Users',
  //       component: () => import('@/views/user/index'),
  //       meta: { title: '用户管理', icon: 'user' }
  //     },
  //     {
  //       path: 'depts',
  //       name: 'Depts',
  //       component: () => import('@/views/dept/index'),
  //       meta: { title: '部门管理', icon: 'dept' }
  //     }
  //   ]
  // },
  { path: '*', redirect: '/404', hidden: true }
]
