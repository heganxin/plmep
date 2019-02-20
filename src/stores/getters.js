const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  avatar: state => state.user.avatar,
  token: state => state.user.token,
  userInfo: state => state.user.userInfo,
  islogin: state => state.user.islogin,
  permission_routers: state => state.permission.routers,
  addRouters: state => state.permission.addRouters,
  visitedviews: state => state.tagsview.visitedviews
}
export default getters
