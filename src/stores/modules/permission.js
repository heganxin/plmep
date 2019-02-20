import { asyncRouterMap, constantRouterMap } from '@/router'
// import { getUserRouters } from '@/api/permission'
// import { removeToken } from '@/utils/auth'
/**
 *
 * @param {Array} userRouter 后台返回的用户权限json
 * @param {Array} allRouter 前端配置好的所有动态路由的集合
 * @return {Array} realRoutes 过滤后的路由
 */
function recursionRouter (userRouter = [], allRouter = []) {
  var realRoutes = []
  allRouter.forEach((v, i) => {
    if (v.meta) {
      userRouter.forEach((item, index) => {
        // if (item.title === '问题管理' && v.meta.title === '问题管理') {
        //   debugger
        // }
        if (item.title === v.meta.title) {
          if (item.children && item.children.length > 0) {
            v.children = recursionRouter(item.children, v.children)
          }
          realRoutes.push(v)
        }
      })
    } else {
      realRoutes.push(v)
    }
  })
  // debugger
  return realRoutes
}

const permission = {
  state: {
    routers: constantRouterMap,
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routers = constantRouterMap.concat(routers)
    }
  },
  actions: {
    GenerateRoutes ({ commit }, data) {
      return new Promise((resolve, reject) => {
        const dynamicRouter = [
          {
            cfunid: '1000',
            fun_code: '1003',
            redirect: '/huanbao',
            fun_level: 1,
            fun_name: 'huanbao',
            funurl: '/weekly',
            title: '环保',
            meta: { title: '环保', icon: 'permission' },
            children: [
              {
                cfunid: '100010',
                title: '环保管理',
                fun_level: 2,
                parent_id: '1000',
                name: 'huanbaoindex',
                funurl: '/huanbao/index',
                meta: { title: '环保管理', icon: 'permission' }
              }
            ]}]
        // let accessedRouters
        // if (roles.indexOf('admin') >= 0) {
        //   accessedRouters = asyncRouterMap
        // } else {
        //   accessedRouters = recursionRouter(dynamicRouter, asyncRouterMap)
        // }
        console.log('asyncRouterMap', asyncRouterMap)
        var accessedRouters = recursionRouter(dynamicRouter, asyncRouterMap)
        console.log('accessedRouters', accessedRouters)
        commit('SET_ROUTERS', accessedRouters)
        resolve()
        // }).catch(error => {
        //   console.log(error)
        //   removeToken()
        //   reject(error)
        // })
      })
    }
  }
}

export default permission
