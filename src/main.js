// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './stores'

// 引用全局UI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import i18n from './lang/index'

Vue.use(ElementUI, store, {i18n: (key, value) => i18n.t(key, value)})
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  console.log('store', store)
  console.log('to', to)
  console.log('from', from)
  if (store.getters.userInfo) {
    if (to.path === '/') {
      store.commit('SET_ISLOGIN', false)
    }
    next()
  } else {
    if (to.path === '/') {
      console.log('vm2', 1)
      next()
    } else {
      console.log('vm3', 1)
      next({
        path: '/'
      })
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
