# React Practice

基于 **Vite + React 19 + TypeScript** 的 React 核心概念学习与实践项目。

## 技术栈

- **React** ^19.2.4
- **TypeScript** ^6.0.2
- **Vite** ^8.0.3

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器（默认 http://localhost:5173）
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 项目结构

```
src/
├── components/     # 可复用 UI 组件（Button 等）
├── layouts/        # 布局组件（MainLayout）
├── pages/          # 页面与学习 Demo
│   ├── component/  # 组件组合示例（UserCard、Avatar）
│   ├── props/      # Props 父子传值 Demo
│   ├── states/     # useState 状态管理 Demo
│   ├── key/        # 列表渲染 key Demo
│   ├── event/      # 事件处理 Demo
│   └── effect/     # useEffect 三种用法 Demo
├── hooks/          # 自定义 Hooks（useCounter）
├── services/       # HTTP 请求封装
├── utils/          # 工具函数（formatDate、debounce、throttle）
├── types/          # TypeScript 类型定义
└── constants/      # 全局常量与 API 配置
```

## 学习模块

| 模块 | 路径 | 核心知识点 |
|------|------|-----------|
| Props 传值 | `pages/props/` | 父子组件通信、回调函数 |
| State 状态 | `pages/states/` | useState、函数式更新 |
| Key 列表 | `pages/key/` | 列表渲染、key 的作用 |
| Event 事件 | `pages/event/` | 受控组件、onChange |
| Effect 副作用 | `pages/effect/` | useEffect 三种用法、cleanup |

## 环境变量

在项目根目录创建 `.env` 文件：

```env
VITE_API_BASE_URL=http://localhost:3000
```

## 文档

详细的 API 文档、组件说明和代码示例请参阅 [WIKI.md](./WIKI.md)。
