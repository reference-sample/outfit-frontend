import request from "./request";

export interface LoginParams {
  username: string;
  password: string;
}

export interface RegisterParams {
  username: string;
  password: string;
  nickname: string;
}

/**
 * 登录
 */
export function login(data: LoginParams) {
  return request.post("/v1/auth/login", data);
}

/**
 * 注册
 */
export function register(data: RegisterParams) {
  return request.post("/v1/auth/register", data);
}

/**
 * 修改密码
 */
export function changePassword(data: any) {
  return request.post("/v1/auth/change-pwd", data);
}
