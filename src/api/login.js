import request from '@/utils/request'

export function loginByUsername(username, password) {
  var grantType = 'password'
  var scope = 'server'
  var randomStr = new Date().getTime()
  var code = ''
  const data = {
    username,
    password,
    randomStr,
    code,
    grantType,
    scope
  }
  return request({
    url: '/ssm/auth/token',
    headers: {
      'Authorization': 'Basic Y29tLmdpdGh1Yi5saXV3ZWlqdzpjb20uZ2l0aHViLmxpdXdlaWp3Ljg4ODg4OA=='
    },
    method: 'post',
    params: data
  })
}

export function logout(accesstoken) {
  return request({
    url: '/ssm/auth/removeToken',
    method: 'post',
    params: { accesstoken }
  })
}

export function getUserInfo() {
  return request({
    url: '/ssm/auth/info',
    method: 'get'
  })
}
