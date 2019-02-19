import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'index',
      component: () => import('@/components/home/index')
    },
    { path: '/', component: () => import('@/components/login/index'), hidden: true },
    { path: '/404', component: () => import('@/components/404'), hidden: true }
  ]
})
