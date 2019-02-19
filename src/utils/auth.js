import Cookies from 'js-cookie'

const TokenKey = 'User-Token'
const UserCode = 'UserCode'

export function getToken () {
  return Cookies.get(TokenKey)
}

export function setToken (token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken () {
  return Cookies.remove(TokenKey)
}

export function setUserCode (usercode) {
  return Cookies.set(UserCode, usercode, { expires: 7 })
}

export function getUserCode () {
  return Cookies.get(UserCode)
}

export function removeUserCode () {
  return Cookies.remove(UserCode)
}
