import {
  baseUrl, //引入baseUrl 
} from "../config/env";
import axios from 'axios';
import { Toast } from 'vant';
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


// 响应拦截器
axios.interceptors.response.use(response => {
    if (response.status === 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  // 服务器状态码不是200的情况    
  error => {
    if (error.response.status) {
      switch (error.response.status) {
        // 401: 未登录                
        // 未登录则跳转登录页面，并携带当前页面的路径                
        // 在登录成功后返回当前页面，这一步需要在登录页操作。                
        case 401:
          router.replace({
            path: '/',
            query: {
              redirect: router.currentRoute.fullPath
            }
          });
          break;
          // 403 token过期                
          // 登录过期对用户进行提示                
          // 清除本地token和清空vuex中token对象                
          // 跳转登录页面                
        case 403:
          Toast({
            message: '登录过期，请重新登录',
            duration: 1000,
            forbidClick: true
          });
          // 清除token                    
          localStorage.removeItem('token');
          // store.commit('loginSuccess', null);
          // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
          setTimeout(() => {
            router.replace({
              path: '/',
              query: {
                redirect: router.currentRoute.fullPath
              }
            });
          }, 1000);
          break;
          // 404请求不存在                
        case 404:
          Toast({
            message: '网络请求不存在',
            duration: 1500,
            forbidClick: true
          });
          break;
          // 其他错误，直接抛出错误提示                
        default:
          Toast({
            message: error.response.data.message,
            duration: 1500,
            forbidClick: true
          });
      }
      return Promise.reject(error.response);
    }
  }
);

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