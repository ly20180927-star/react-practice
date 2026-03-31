# useEffect 的本质
**useEffect = 在“渲染完成之后”执行副作用的地方**  
副作用：  
```
纯渲染：根据 state → 生成 UI
副作用：做 UI 之外的事情
```
常见副作用：  
```
API 请求
操作 DOM
订阅（WebSocket / 事件监听）
定时器（setInterval）
```

# 执行时机
1️⃣ render（执行组件函数）  
2️⃣ commit（更新 DOM）  
3️⃣ useEffect 执行

**useEffect 一定在 DOM 更新之后执行。因为副作用通常依赖“已经渲染好的 UI”**

# 三种 useEffect 用法 
三种用法用来“模拟/覆盖”生命周期行为

### 1️⃣ 只执行一次  useEffect(..., []) 
**只在组件第一次渲染后执行**
```
import { useEffect } from 'react'

useEffect(() => {
  console.log('只执行一次')
}, [])
```

###  useEffect(..., [deps])
**count 变化 → 执行**
依赖数组，当 a 或 b 变化时，重新执行 effect
```
useEffect(() => {
  console.log('依赖变化')
}, [a, b])
```

### cleanup 有return () => { ... }
cleanup = 释放副作用资源（防泄漏、防重复），比如清理定时器  
什么时候执行cleanup  
1️⃣ 组件卸载时  
2️⃣ 依赖变化前（先清理，再执行新的 effect）

```
useEffect(() => {
  const timer = setInterval(() => {
    console.log('tick')
  }, 1000)
// 如果不执行，组件销毁后，定时器还在跑 ❌
  return () => {
    // 先清理 在执行
    clearInterval(timer)
  }
}, [])
```

# 总结

**useEffect = 让 React 和“外部世界”保持同步**  
```
组件渲染（纯）
   ↓
useEffect（副作用）
   ↓
同步外部系统
```