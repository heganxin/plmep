const getters = {
  token: state => state.user.token,
  userInfo: state => state.user.userInfo,
  islogin: state => state.user.islogin,
  visitedviews: state => state.tagsview.visitedviews
}
export default getters
