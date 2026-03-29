# React + TypeScript + Vite 项目结构说明

## 📁 目录结构

```
src/
├── assets/          # 静态资源（图片、字体等）
├── components/      # 可复用的 UI 组件
├── constants/       # 常量定义
├── hooks/          # 自定义 Hooks
├── layouts/        # 布局组件
├── pages/          # 页面级组件
├── services/       # API 服务层
├── store/          # 状态管理（Redux/Zustand 等）
├── types/          # TypeScript 类型定义
├── utils/          # 工具函数
├── App.tsx         # 主应用组件
├── main.tsx        # 应用入口
└── index.css       # 全局样式
```

## 📂 各目录说明

### `components/` - 可复用组件
存放通用的、可复用的 UI 组件，例如：
- Button, Input, Modal 等基础组件
- Header, Footer 等业务通用组件

**示例：**
```typescript
// src/components/Button.tsx
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export function Button({ children, onClick }: ButtonProps) {
  return <button onClick={onClick}>{children}</button>;
}
```

### `pages/` - 页面组件
存放页面级别的组件，通常与路由对应：
- Home, About, Contact 等页面
- Dashboard, Profile 等业务页面

### `hooks/` - 自定义 Hooks
存放可复用的自定义 Hooks：
- useCounter, useToggle 等通用 Hook
- useUser, useAuth 等业务 Hook

**示例：**
```typescript
// src/hooks/useCounter.ts
export function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  return { count, increment: () => setCount(c => c + 1) };
}
```

### `utils/` - 工具函数
存放纯函数工具：
- formatDate, validateEmail 等
- debounce, throttle 等

### `services/` - API 服务层
封装 API 请求：
- request.ts - HTTP 请求封装
- userApi.ts - 用户相关 API
- authApi.ts - 认证相关 API

### `store/` - 状态管理
全局状态管理（如使用 Redux、Zustand 等）：
- counterStore.ts
- userStore.ts

### `types/` - TypeScript 类型定义
存放类型定义文件：
- user.ts - 用户相关类型
- api.ts - API 相关类型
- common.ts - 通用类型

### `constants/` - 常量定义
存放项目常量：
- api.ts - API 端点常量
- routes.ts - 路由常量

### `layouts/` - 布局组件
页面布局组件：
- MainLayout - 主布局
- AuthLayout - 认证页布局

### `assets/` - 静态资源
存放静态资源文件：
- images/ - 图片
- fonts/ - 字体
- icons/ - 图标

## 🚀 使用示例

### 1. 创建新组件
```bash
# 在 components 目录下创建
src/components/MyComponent/
  ├── MyComponent.tsx
  ├── MyComponent.css
  └── index.ts
```

### 2. 创建新页面
```bash
# 在 pages 目录下创建
src/pages/About/
  ├── About.tsx
  └── index.ts
```

### 3. 使用自定义 Hook
```typescript
import { useCounter } from '@/hooks/useCounter';

function MyComponent() {
  const { count, increment } = useCounter(0);
  return <div>{count}</div>;
}
```

### 4. 调用 API
```typescript
import { http } from '@/services/request';

async function fetchUsers() {
  const users = await http.get('/users');
  return users;
}
```

## 💡 最佳实践

1. **组件职责单一** - 每个组件只负责一个功能
2. **合理拆分** - 大组件拆分为多个小组件
3. **类型安全** - 充分利用 TypeScript 类型系统
4. **代码复用** - 优先使用 Hooks 和高阶组件
5. **文件组织** - 相关文件放在同一目录

## 📝 开发规范

- 使用 `.tsx` 扩展名编写 React 组件
- 使用 `.ts` 扩展名编写 TypeScript 代码
- 组件名称使用 PascalCase
- 文件和文件夹使用 camelCase 或 kebab-case
- 导出组件时提供清晰的类型定义

## 🔧 可用命令

```bash
npm run dev      # 启动开发服务器
npm run build    # 构建生产版本
npm run preview  # 预览生产构建
```
