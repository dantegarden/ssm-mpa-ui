import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import { getCookies, removeCookies } from '@/utils/cookies'
import _CONST from '@/utils/globalConfig'
import qs from 'qs';

// create an axios instance
const service = axios.create({
    //baseURL: process.env.BASE_API, // api的base_url
    timeout: 30000, // request timeout
})

// request interceptor
service.interceptors.request.use(config => {
    // Do something before request is sent
    if (getCookies(_CONST.TOKEN)) {
        config.headers['Authorization'] = 'Bearer ' + getCookies(_CONST.TOKEN) // 让每个请求携带token-- ['Authorization']为自定义key 请根据实际情况自行修改
    }

    return config
}, error => {
    // Do something with request error
    console.error('error', error) // for debug
    Promise.reject(error)
})

// respone interceptor
service.interceptors.response.use(
    response => {
      const res = response.data
      if (res.code != 200) {
        message(res.msg, 'error')
        return Promise.reject(res.message)
      }
      return res.data
    },
    error => {
      const res = error.response
      console.log(res.status)
      if (res.status === 401) {
        //TODO 打回到登陆页面
        removeCookies(_CONST.TOKEN)
        location.reload()
      } else if (res.status === 403) {
        message(res.status + '： ' + res.data.msg, 'error')
      } else if (res.status === 400) {
        message(res.status + '： ' + res.data.msg, 'error')
      } else if (res.status === 202) {
        this.$router.push({ path: '/' })
      } else if (res.status === 503) { // 服务异常
        message(res.status + '： ' + res.data, 'error')
      } else {
        message(res.status + '： ' + res.data.message, 'error')
      }
      return Promise.reject(error)
    })


export function message(text, type) {
  Message({
    message: text,
    type: type,
    duration: 5 * 1000
  })
}

export default service
