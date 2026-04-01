# useContext 本质
**✅ 跨组件共享数据的“隐式依赖注入”机制**

# 用法
#### Step 1：创建 Context 
```
import { createContext } from 'react'

const UserContext = createContext(null)
```

#### Step 2：提供数据（Provider）
```
function App() {
  const user = { name: 'Alice' }

  return (
    <UserContext.Provider value={user}>
      <A />
    </UserContext.Provider>
  )
}
```
##### Step 3：消费数据
```
import { useContext } from 'react'

function C() {
  const user = useContext(UserContext)

  return <div>{user.name}</div>
}
```

# 执行机制
```
Provider 存一个 value
 ↓
React 在组件树中向下传播
 ↓
useContext 直接读取最近的 Provider
```
**useContext 只会拿“最近的 Provider”**

# 一个非常重要的坑
**Context 更新 = 全部消费者重新渲染**

# 什么时候该用 useContext？
```
✔ 用户信息（登录态）
✔ 主题（dark/light）
✔ 语言（i18n）
✔ 全局配置
```

# 不适合
```
❌ 高频更新数据（如动画、计时器）
❌ 大量业务状态
```


# 最佳实践
#### 推荐结构：
```
context/
 ├── userContext.js
 ├── themeContext.js
```

#### 封装 Hook
```
// userContext.js
const UserContext = createContext(null)

export const useUser = () => {
  return useContext(UserContext)
}
```

#### 使用
```
const user = useUser()
```