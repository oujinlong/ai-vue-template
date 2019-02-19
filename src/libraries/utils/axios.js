/* eslint-disable handle-callback-err */
import axios from 'axios'
import storage from './storage'
const instance = axios.create({
  // // TODO: full base url
  // baseURL: 'http://127.0.0.1:2080/',
  timeout: 10000
})

instance.interceptors.request.use(config => {
  // Add authorization in the header
  // TODO: token in store
  const token = storage.get('token')
  if (token) {
    config.headers.accessToken = token
  }
  // return config

  return config
})

// 拦截响应
instance.interceptors.response.use(
  response => {
    var errorMessage = '服务器连接失败'
    if (response.status === 200 || response.status === 401) {
      return Promise.resolve(response.data)
    } else if (response.status === 401) {
      return Promise.resolve(errorMessage, 'error')
    } else {
      return Promise.reject(errorMessage)
    }
  }, error => {
    var errorMessage = '服务器连接失败'
    return Promise.reject(errorMessage)
  }
)
export default instance
