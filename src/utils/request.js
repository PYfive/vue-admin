import axios from 'axios'
import store from "../store";
import {Message, MessageBox} from "element-ui";

const service = axios.create({
  timeout: 5000
})
// 请求拦截器
service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      config.headers['Authorization'] = `Bearer ${store.getters.token}`
    }
    return config
  },
  err => Promise.reject(err)
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code !== '1000') {
      Message({
        message: res.msg || 'Error',
        type: 'error',
        duration: 5 * 1000
      })

      if (['1005','1006','1007'].includes(res.code)) {
        alert(222)
        MessageBox.confirm('登录失效，你确定要返回登录页吗', '返回登录页', {
          confirmButtonText: '确认',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        })
      }
      return Promise.reject(new Error(res.msg || 'Error'))
    } else {
      return res
    }
  },
  error => {
    return error
  }
)
export default service
