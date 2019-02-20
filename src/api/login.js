/**
 * Created by heganxin on 2019/2/15.
 */
import request from '@/utils/request'

export function login (username, password) {
  return request({
    url: '/netmarkets/jsp/ext/longcheer/common/common.jsp?operation=login',
    method: 'post',
    params: {
      username: username,
      password: password
    }
  })
}
