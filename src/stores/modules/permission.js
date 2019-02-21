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
  console.log('userRouter', userRouter)
  console.log('allRouter', allRouter)
  var realRoutes = []
  allRouter.forEach((v, i) => {
    if (v.meta) {
      userRouter.forEach((item, index) => {
        // if (item.title === '问题管理' && v.meta.title === '问题管理') {
        //   debugger
        // }
        console.log('-------------------->', v.meta.title + '----' + item.title)
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
  console.log('end realRoutes', realRoutes)
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
        const dynamicRouter = [{
          cfunid: '1000',
          fun_code: '1001',
          redirect: '/fMytasks',
          fun_level: 1,
          fun_name: '',
          // funurl: '/fengyang',
          title: 'fengyangRoute.myTasks',
          meta: { title: 'fengyangRoute.myTasks', icon: 'permission' },
          children: [
            {
              cfunid: '100010',
              title: 'fengyangRoute.myTasks',
              fun_level: 2,
              parent_id: '1000',
              name: 'fMytasks',
              funurl: '/fMytasks',
              meta: { title: 'fengyangRoute.myTasks', icon: 'permission' }
            }]
        }]
        const dynamicRouter2 = [{
          cfunid: '1000',
          fun_code: '1001',
          redirect: '/hMytasks',
          fun_level: 1,
          fun_name: '',
          // funurl: '/fengyang',
          title: 'huanbaoRoute.myTasks',
          meta: { title: 'huanbaoRoute.myTasks', icon: 'permission' },
          children: [
            {
              cfunid: '100010',
              title: 'huanbaoRoute.myTasks',
              fun_level: 2,
              parent_id: '1000',
              name: 'hMytasks',
              funurl: '/hMytasks',
              meta: { title: 'huanbaoRoute.myTasks', icon: 'permission' }
            }]
        },
        {
          cfunid: '1004',
          fun_code: '1005',
          redirect: '/submitted',
          fun_level: 1,
          fun_name: '',
          // funurl: '/fengyang',
          title: 'huanbaoRoute.Material_submitted',
          meta: { title: 'huanbaoRoute.Material_submitted', icon: 'permission' },
          children: [
            {
              cfunid: '100012',
              title: 'huanbaoRoute.Material_submitted',
              fun_level: 2,
              parent_id: '1000',
              name: 'submitted',
              funurl: '/submitted',
              meta: { title: 'huanbaoRoute.Material_submitted', icon: 'permission' }
            }]
        },
        {
          cfunid: '1002',
          fun_code: '1003',
          redirect: '/search',
          fun_level: 1,
          fun_name: '',
          // funurl: '/fengyang',
          title: 'huanbaoRoute.Material_Search',
          meta: { title: 'huanbaoRoute.Material_Search', icon: 'permission' },
          children: [
            {
              cfunid: '100011',
              title: 'huanbaoRoute.Material_Search',
              fun_level: 2,
              parent_id: '1002',
              name: 'search',
              funurl: '/search',
              meta: { title: 'huanbaoRoute.Material_Search', icon: 'permission' }
            }]
        }]
        var accessedRouters
        if (data.type === '封样') {
          accessedRouters = recursionRouter(dynamicRouter, asyncRouterMap)
        } else {
          accessedRouters = recursionRouter(dynamicRouter2, asyncRouterMap)
        }
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
