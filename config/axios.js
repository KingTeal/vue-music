import {
  baseUrl, //引入baseUrl 
} from "../config/env";
import axios from 'axios';
axios.defaults.timeout = 10000; //设置请求时间
axios.defaults.baseURL = baseUrl; //设置默认接口地址


// 设置请求拦截器
axios.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token) {
    // 将获取到的token设置给header中的Authorization
    config.headers.Authorization = token
  }
  return config
})


// 设置响应拦截器
axios.interceptors.response.use(res => {
  // 对结果进行处理
  if (res.data.res_code === 401) {
    // 跳转登录
    this.$routes.replace('/')
    // 删除token
    localStorage.removeItem('token')
  }
  return res
}
// , err => {
//   // 如果是正常接口，会走err，err.response.status值为401 进行跳转及删除token的操作
// }
)

/**
 * 封装get方法
 * @param url
 * @param params
 * @returns {Promise}
 */
export function fetch(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
        params: params
      })
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err)
      })
  })
}
/**
 * 封装post请求
 * @param url
 * @param dparamsata
 * @returns {Promise}
 */

export function post(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}