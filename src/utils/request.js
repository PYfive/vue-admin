import axios from 'axios'



const service = axios.create()
// 请求拦截器
service.interceptors.request.use(
    config => {
        return config
    },
    err => Promise.reject(err)
)

// 响应拦截器
service.interceptors.response.use(
    response => {
        return response
    },
    error => {
        return error
    }
)
export default service