/**
 * 用户类型定义
 */

export interface User {
  id: string | number;
  name: string;
  email: string;
  avatar?: string;
  role?: 'admin' | 'user' | 'guest';
}

export interface UserProfile extends User {
  bio?: string;
  location?: string;
  website?: string;
}
