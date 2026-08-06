import type { AxiosInstance, AxiosResponse } from "axios";
import axios from "axios";
import { getToken, removeToken } from "@/utils/storage";

const service: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// 请求拦截

service.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截

service.interceptors.response.use(
  (response: AxiosResponse) => {
    const res = response.data;
    if (res.code !== 0) {
      return Promise.reject(new Error(res.message || "请求失败"));
    }
    return res.data;
  },

  (error) => {
    if (error.response) {
      const status = error.response.status;
      if (status === 401) {
        removeToken();
        // 后续这里跳登录
      }
    }

    return Promise.reject(error);
  }
);

export default service;
