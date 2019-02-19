import router from './router'
// import store from './stores'
// import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style
// import { getToken } from '@/utils/auth' // getToken from cookie

NProgress.configure({ showSpinner: false })// NProgress Configuration

// const whiteList = ['/login']// no redirect whitelist

router.beforeEach((to, from, next) => {
  console.log('to', to)
  console.log('from', from)
  console.log('next', next)
  NProgress.start() // start progress bar
  next()
  NProgress.done()
  // if (getToken()) { // determine if there has token
  //   if (to.path === '/login') {
  //     next({ path: '/' })
  //     NProgress.done()
  //   } else {
  //     if (store.getters.roles.length === 0) { // 判断当前用户是否已拉取完user_info信息
  //       store.dispatch('GetInfo').then(res => { // 拉取user_info
  //         const roles = res.data.roles // note: roles must be a array! such as: ['editor','develop']
  //         store.dispatch('GenerateRoutes', { roles }).then(() => { // 根据roles权限生成可访问的路由表
  //           router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
  //           next({ ...to, replace: true }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
  //         }).catch((e) => {
  //           store.dispatch('LogOut').then(() => {
  //             // Message.error(e || 'Verification failed, please login again')
  //             next({ path: '/' })
  //           })
  //         })
  //       }).catch((err) => {
  //         // debugger
  //         store.dispatch('FedLogOut').then(() => {
  //           Message.error(err || 'Verification failed, please login again')
  //           next({ path: '/' })
  //         })
  //       })
  //     } else {
  //       next()
  //     }
  //   }
  // } else {
  //   if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
  //     next()
  //   } else {
  //     next('/login') // 否则全部重定向到登录页
  //     NProgress.done() // if current page is login will not trigger afterEach hook, so manually handle it
  //   }
  // }
})

router.afterEach(() => {
  NProgress.done() // finish progress bar
})
