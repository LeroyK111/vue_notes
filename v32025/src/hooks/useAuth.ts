/**
 * @author Leroy
 * @description useAxios封装
 */

import axios from "axios";

const req = axios.create({
  baseURL: import.meta.env.VITE_AI_FILTER_URL as string,
  timeout: 1000,
  headers: { "Accept": "application/json" },
});

// 后续可以调用这个接口拿到 instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;

// 请求拦截器
axios.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
}, { synchronous: true, runWhen: () => true });

// 响应拦截器
axios.interceptors.response.use(function onFulfilled(response) {
  return response;
}, function onRejected(error) {
  return Promise.reject(error);
});

export default req;
