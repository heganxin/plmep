/**
 * Created by heganxin on 2019/2/18.
 */
import Cookies from 'js-cookies'

export function setName (name) {
  return Cookies.set('name', name)
}
export function getName () {
  return Cookies.get('name')
}
export function setToken (token) {
  return Cookies.set('token', token)
}
export function getToken () {
  return Cookies.get('token')
}
export function removeToken () {
  return Cookies.remove('token')
}
