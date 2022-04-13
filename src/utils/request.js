import axios from 'axios'
const request = axios.create()// 创建axios实例
// 创建一个请求拦截器
request.interceptors.request.use()
// 创建一个响应拦截器
request.interceptors.response.use()
export default request// 导出axios实例
