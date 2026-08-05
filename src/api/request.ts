import axios from "axios";
import { Toast } from "vant";

const service = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // 环境变量接口地址
  timeout: 10000,
});

// 请求拦截
service.interceptors.request.use((config) => {
  // 携带token
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// 响应拦截
service.interceptors.response.use(
  (res) => res.data,
  (err) => {
    Toast.fail(err.response?.data?.msg || "网络异常，请稍后重试");
    return Promise.reject(err);
  }
);

export default service;
