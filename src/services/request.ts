/**
 * API 请求封装
 */

import { ApiResponse, ApiError } from '../types/api';

class RequestError extends Error {
  code: number;
  details?: any;

  constructor(error: ApiError) {
    super(error.message);
    this.code = error.code;
    this.details = error.details;
  }
}

export async function request<T = any>(
  url: string,
  options: RequestInit = {}
): Promise<T> {
  const defaultOptions: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const config = { ...defaultOptions, ...options };

  try {
    const response = await fetch(url, config);
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({
        code: response.status,
        message: response.statusText || 'Request failed',
      }));
      
      throw new RequestError({
        code: errorData.code || response.status,
        message: errorData.message || 'Request failed',
        details: errorData.details,
      });
    }

    const result = await response.json();
    
    // 如果响应包含标准格式，返回 data.data，否则直接返回 data
    return (result as any).data !== undefined ? (result as any).data : result;
  } catch (error) {
    if (error instanceof RequestError) {
      throw error;
    }
    
    // 网络错误或其他错误
    throw new RequestError({
      code: -1,
      message: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}

// HTTP 方法快捷函数
export const http = {
  get<T>(url: string, options?: RequestInit) {
    return request<T>(url, { ...options, method: 'GET' });
  },
  
  post<T>(url: string, data?: any, options?: RequestInit) {
    return request<T>(url, {
      ...options,
      method: 'POST',
      body: JSON.stringify(data),
    });
  },
  
  put<T>(url: string, data?: any, options?: RequestInit) {
    return request<T>(url, {
      ...options,
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },
  
  delete<T>(url: string, options?: RequestInit) {
    return request<T>(url, { ...options, method: 'DELETE' });
  },
  
  patch<T>(url: string, data?: any, options?: RequestInit) {
    return request<T>(url, {
      ...options,
      method: 'PATCH',
      body: JSON.stringify(data),
    });
  },
};
