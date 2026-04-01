# React Practice 项目 Wiki

> 基于 Vite + React 19 + TypeScript 的 React 核心概念学习与实践项目。

---

## 目录

- [技术栈](#技术栈)
- [快速开始](#快速开始)
- [项目结构](#项目结构)
- [核心概念模块](#核心概念模块)
  - [Props 传值](#1-props-传值)
  - [State 状态管理](#2-state-状态管理)
  - [Key 列表渲染](#3-key-列表渲染)
  - [Event 事件处理](#4-event-事件处理)
  - [Effect 副作用](#5-effect-副作用)
- [组件库](#组件库)
  - [Button](#button)
  - [UserCard](#usercard)
  - [Avatar](#avatar)
  - [MainLayout](#mainlayout)
- [自定义 Hooks](#自定义-hooks)
  - [useCounter](#usecounter)
- [服务层](#服务层)
  - [HTTP 请求封装](#http-请求封装)
- [工具函数](#工具函数)
- [类型定义](#类型定义)
- [常量配置](#常量配置)

---

## 技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| React | ^19.2.4 | UI 框架 |
| TypeScript | ^6.0.2 | 类型系统 |
| Vite | ^8.0.3 | 构建工具 |
| @vitejs/plugin-react | ^6.0.1 | React 热更新支持 |

---

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

---

## 项目结构

```
react-practice/
├── public/                 # 静态资源
├── src/
│   ├── components/         # 可复用 UI 组件
│   │   ├── Button.tsx      # 通用按钮组件
│   │   ├── Button.css
│   │   └── index.ts
│   ├── constants/          # 全局常量
│   │   ├── api.ts          # API 地址与端点配置
│   │   └── index.ts
│   ├── hooks/              # 自定义 Hooks
│   │   ├── useCounter.ts   # 计数器 Hook
│   │   └── index.ts
│   ├── layouts/            # 布局组件
│   │   ├── MainLayout.tsx  # 主布局（含 header/sidebar/footer 插槽）
│   │   ├── MainLayout.css
│   │   └── index.ts
│   ├── pages/              # 页面级组件（学习 Demo）
│   │   ├── component/      # 组件组合示例
│   │   │   ├── Avatar.tsx
│   │   │   ├── UserCard.tsx
│   │   │   └── UserInfo.tsx
│   │   ├── props/          # Props 传值 Demo
│   │   │   ├── ParentDemo.tsx
│   │   │   └── SonDemo.tsx
│   │   ├── states/         # State 状态 Demo
│   │   │   └── Calcarator.tsx
│   │   ├── key/            # Key 列表 Demo
│   │   │   └── KeyDemo.tsx
│   │   ├── event/          # 事件处理 Demo
│   │   │   └── EventDemo.tsx
│   │   ├── effect/         # useEffect Demo
│   │   │   └── EffectDemo.tsx
│   │   └── Home.tsx        # 首页，聚合所有 Demo
│   ├── services/           # API 服务层
│   │   ├── request.ts      # HTTP 请求封装
│   │   └── index.ts
│   ├── store/              # 状态管理（预留）
│   ├── types/              # TypeScript 类型定义
│   │   ├── api.ts          # API 响应类型
│   │   ├── user.ts         # 用户类型
│   │   └── index.ts
│   ├── utils/              # 工具函数
│   │   ├── common.ts       # 通用工具（日期/防抖/节流）
│   │   └── index.ts
│   ├── App.tsx             # 根组件
│   └── main.tsx            # 应用入口
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 核心概念模块

### 1. Props 传值

**路径：** `src/pages/props/`

演示父子组件之间通过 Props 传递数据和回调函数。

**ParentDemo → SonDemo 数据流：**

```
ParentDemo
  ├── 定义 user 数据：{ name, age, avatar }
  ├── 定义 handleFollow 回调函数
  └── 传递给 SonDemo：<SonDemo userData={user} onFollow={handleFollow} />

SonDemo
  ├── 接收 userData：渲染用户头像、名称、年龄
  └── 接收 onFollow：绑定到关注按钮 onClick
```

**核心知识点：**
- Props 是单向数据流，父 → 子
- 子组件通过回调函数向父组件通信
- `children` 是特殊的 props，代表父组件的插槽内容

---

### 2. State 状态管理

**路径：** `src/pages/states/Calcarator.tsx`

演示 `useState` 的两种写法及其区别。

```tsx
// ✅ 推荐：回调函数形式，始终基于最新值计算（批量更新安全）
function increment() {
  setNumb(c => c + 1);
}

// ⚠️ 注意：直接引用 state，在批量更新或异步场景下可能使用过时的值
function increment2() {
  setNumb(numb + 1);
}
```

**核心知识点：**
- 当新状态依赖旧状态时，**必须使用回调函数形式** `setState(prev => ...)`
- `useState` 触发重新渲染，但不会立即更新变量

---

### 3. Key 列表渲染

**路径：** `src/pages/key/KeyDemo.tsx`

演示列表渲染中 `key` 的正确使用。

```tsx
list.map(item => (
  <div key={item.id}>   {/* ✅ 使用唯一稳定的 id 作为 key */}
    {item.name}
    <button onClick={() => delKey(item.id)}>删除</button>
  </div>
))
```

**核心知识点：**
- `key` 帮助 React 识别列表中哪些元素发生了变化
- `key` 必须在兄弟元素中唯一且稳定
- 避免使用数组下标 `index` 作为 `key`（删除/重排时会有 bug）

---

### 4. Event 事件处理

**路径：** `src/pages/event/EventDemo.tsx`

演示受控组件（Controlled Component）模式——input 的值由 React state 管理。

```tsx
const [inputVal, setInputVal] = useState('');

function handleChange(e: any) {
  setInputVal(e.target.value);  // 每次输入都同步到 state
}

<input type="text" value={inputVal} onChange={handleChange} />
```

**核心知识点：**
- 受控组件：表单元素的值由 React state 完全控制
- `onChange` 在每次值变化时触发（不同于原生 DOM 的 `change` 事件）
- `e.target.value` 获取当前输入值

---

### 5. Effect 副作用

**路径：** `src/pages/effect/EffectDemo.tsx`

演示 `useEffect` 的三种核心用法：

| 用法 | 依赖数组 | 触发时机 |
|------|----------|----------|
| 挂载执行一次 | `[]` | 组件首次渲染后 |
| 依赖变化时执行 | `[count]` | count 变化后 |
| 带清理函数 | `[isRunning]` | isRunning 变化前 / 组件卸载时 |

```tsx
// 用法 1：只在挂载时执行
useEffect(() => {
  console.log('组件挂载');
}, []);

// 用法 2：依赖 count
useEffect(() => {
  console.log('count 变化了 =>', count);
}, [count]);

// 用法 3：带 cleanup，防止内存泄漏
useEffect(() => {
  if (!isRunning) return;
  const timer = setInterval(() => { ... }, 1000);
  return () => clearInterval(timer);  // cleanup
}, [isRunning]);
```

**核心知识点：**
- 不写依赖数组：每次渲染后都执行
- 依赖数组为 `[]`：只执行一次（等效于 componentDidMount）
- return 的函数是 cleanup，在下次 effect 执行前和组件卸载时调用
- 定时器、订阅、WebSocket 等必须在 cleanup 中清理

---

## 组件库

### Button

**路径：** `src/components/Button.tsx`

通用按钮组件，支持多种变体和状态，使用 `forwardRef` 支持 ref 转发。

**Props：**

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `variant` | `'primary' \| 'secondary' \| 'danger' \| 'ghost'` | `'primary'` | 按钮样式变体 |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | 按钮尺寸 |
| `loading` | `boolean` | `false` | 加载状态（显示 spinner，禁用点击） |
| `disabled` | `boolean` | `false` | 禁用状态 |
| `children` | `React.ReactNode` | — | 按钮内容 |

**使用示例：**

```tsx
import Button from '@/components/Button';

<Button variant="primary" size="large" onClick={handleClick}>
  确认提交
</Button>

<Button variant="danger" loading={isSubmitting}>
  删除
</Button>
```

---

### UserCard

**路径：** `src/pages/component/UserCard.tsx`

用户卡片组件，组合了 `Avatar` 和 `UserInfo`，支持 `children` 插槽。

**Props：**

| 属性 | 说明 |
|------|------|
| `user` | 用户信息（src, width, height, age） |
| `stockList` | 股票信息（name） |
| `children` | 插槽内容，渲染在卡片底部 |

---

### Avatar

**路径：** `src/pages/component/Avatar.tsx`

头像展示组件，渲染圆形图片。

**Props：** `src`, `width`, `height`

---

### MainLayout

**路径：** `src/layouts/MainLayout.tsx`

通用页面布局组件，提供 header / sidebar / main / footer 四个区域插槽。

**Props：**

| 属性 | 类型 | 说明 |
|------|------|------|
| `children` | `React.ReactNode` | 主内容区（必填） |
| `header` | `React.ReactNode` | 顶部区域（可选） |
| `sidebar` | `React.ReactNode` | 侧边栏（可选） |
| `footer` | `React.ReactNode` | 底部区域（可选） |

**使用示例：**

```tsx
<MainLayout
  header={<nav>导航栏</nav>}
  sidebar={<aside>侧边菜单</aside>}
  footer={<footer>版权信息</footer>}
>
  <main>页面主内容</main>
</MainLayout>
```

---

## 自定义 Hooks

### useCounter

**路径：** `src/hooks/useCounter.ts`

计数器 Hook，支持最大值/最小值限制。

**参数：**

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `initialValue` | `number` | `0` | 初始值 |
| `min` | `number` | `-Infinity` | 最小值 |
| `max` | `number` | `Infinity` | 最大值 |

**返回值：**

| 字段 | 类型 | 说明 |
|------|------|------|
| `count` | `number` | 当前计数值 |
| `increment` | `() => void` | 加 1（不超过 max） |
| `decrement` | `() => void` | 减 1（不低于 min） |
| `reset` | `() => void` | 重置到初始值 |
| `setCount` | `(value: number) => void` | 直接设置值 |

**使用示例：**

```tsx
import { useCounter } from '@/hooks/useCounter';

function Counter() {
  const { count, increment, decrement, reset } = useCounter({
    initialValue: 0,
    min: 0,
    max: 10,
  });

  return (
    <div>
      <span>{count}</span>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>重置</button>
    </div>
  );
}
```

---

## 服务层

### HTTP 请求封装

**路径：** `src/services/request.ts`

基于 Fetch API 封装的 HTTP 客户端，统一处理错误和响应格式。

**核心函数：**

```ts
// 底层通用请求
request<T>(url: string, options?: RequestInit): Promise<T>

// 快捷方法
http.get<T>(url, options?)
http.post<T>(url, data?, options?)
http.put<T>(url, data?, options?)
http.delete<T>(url, options?)
http.patch<T>(url, data?, options?)
```

**使用示例：**

```ts
import { http } from '@/services/request';
import { API_ENDPOINTS } from '@/constants/api';

// GET 请求
const users = await http.get<User[]>(API_ENDPOINTS.USER_LIST);

// POST 请求
const result = await http.post(API_ENDPOINTS.AUTH_LOGIN, {
  username: 'admin',
  password: '123456',
});
```

**错误处理：**
- HTTP 非 2xx 响应 → 抛出 `RequestError`（含 code 和 message）
- 网络错误 → 抛出 `RequestError`（code: -1）
- 响应格式：若包含 `{ data: ... }` 则自动解包，否则返回原始数据

---

## 工具函数

**路径：** `src/utils/common.ts`

### `formatDate(date, format?)`

格式化日期。

```ts
formatDate(new Date(), 'YYYY-MM-DD')           // '2026-03-31'
formatDate('2026-01-01', 'YYYY年MM月DD日')     // '2026年01月01日'
formatDate(new Date(), 'HH:mm:ss')             // '10:30:00'
```

| 占位符 | 含义 |
|--------|------|
| `YYYY` | 4位年份 |
| `MM` | 2位月份 |
| `DD` | 2位日期 |
| `HH` | 2位小时 |
| `mm` | 2位分钟 |
| `ss` | 2位秒钟 |

---

### `debounce(func, wait)`

防抖函数：在停止调用 `wait` 毫秒后才执行。

```ts
const handleSearch = debounce((keyword: string) => {
  fetchSearchResults(keyword);
}, 300);
```

**适用场景：** 搜索框输入、窗口 resize 事件

---

### `throttle(func, limit)`

节流函数：在 `limit` 毫秒内最多执行一次。

```ts
const handleScroll = throttle(() => {
  checkScrollPosition();
}, 100);
```

**适用场景：** 滚动事件、鼠标移动事件、按钮防重复点击

---

## 类型定义

### User 类型（`src/types/user.ts`）

```ts
interface User {
  id: string | number;
  name: string;
  email: string;
  avatar?: string;
  role?: 'admin' | 'user' | 'guest';
}

interface UserProfile extends User {
  bio?: string;
  location?: string;
  website?: string;
}
```

### API 类型（`src/types/api.ts`）

```ts
// 标准响应格式
interface ApiResponse<T = any> {
  code: number;
  message: string;
  data: T;
}

// 分页响应
interface PaginatedResponse<T> extends ApiResponse<T[]> {
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
}

// 错误格式
interface ApiError {
  code: number;
  message: string;
  details?: any;
}
```

---

## 常量配置

**路径：** `src/constants/api.ts`

```ts
// API 基础地址，优先读取环境变量 VITE_API_BASE_URL
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

// 超时时间（毫秒）
export const API_TIMEOUT = 10000;

// API 端点
export const API_ENDPOINTS = {
  USER_LIST: '/users',
  USER_DETAIL: (id: string | number) => `/users/${id}`,
  AUTH_LOGIN: '/auth/login',
  AUTH_LOGOUT: '/auth/logout',
  AUTH_REGISTER: '/auth/register',
};
```

**环境变量配置（`.env` 文件）：**

```env
VITE_API_BASE_URL=https://api.example.com
```
