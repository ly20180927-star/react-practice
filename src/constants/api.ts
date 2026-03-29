/**
 * API 请求基础配置
 */

export const API_BASE_URL = (import.meta as any).env?.VITE_API_BASE_URL || 'http://localhost:3000';
export const API_TIMEOUT = 10000; // 10 秒

export const API_ENDPOINTS = {
  // 用户相关
  USER_LIST: '/users',
  USER_DETAIL: (id: string | number) => `/users/${id}`,
  
  // 认证相关
  AUTH_LOGIN: '/auth/login',
  AUTH_LOGOUT: '/auth/logout',
  AUTH_REGISTER: '/auth/register',
} as const;
