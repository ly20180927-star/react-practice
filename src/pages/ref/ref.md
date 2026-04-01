# useRef 本质 
**✅ useRef = 一个“不会触发渲染”的可变容器**  
**ref 是一个对象，包含一个 current 属性，用于存储组件实例或 DOM 元素。**

# 语法用法
```
const ref = useRef(initialValue)
// 结构
ref = {
  current: initialValue
}
```
### 特点
```
✔ 可以改（ref.current = xxx）
✔ 改了不会重新 render
✔ 生命周期内始终是同一个对象
```

# 二、useRef vs useState
| 特性               | useState | useRef |
| ---------------- | -------- | ------ |
| 数据变化会不会触发 render | ✅ 会      | ❌ 不会   |
| 是否持久化            | ✅ 是      | ✅ 是    |
| 是否适合 UI 数据       | ✅ 是      | ❌ 否    |
| 是否适合“中间变量”       | ❌        | ✅      |

```
state = 用来“驱动 UI”
ref = 用来“存东西但不影响 UI”
```

# 三、useRef 应用场景
### ✅ 用途1：操作 DOM
```
// 当页面加载完成后，自动将光标聚焦（Focus）到输入框中
import { useRef, useEffect } from 'react'
function App() {
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return <input ref={inputRef} />
}
```

## ✅ 用途2：保存“跨 render 的变量”
即使组件重新渲染：值不会丢
```
const countRef = useRef(0)

countRef.current += 1
```

# 为什么 useEffect 需要 useRef？
### 闭包陷阱
effect 只执行一次  
闭包“锁住了当时的 count”  
```
useEffect(() => {
  setInterval(() => {
    console.log(count)
  }, 1000)
}, [])
```

# useRef 如何解决 
思路： 
**ref = 永远指向“最新值”  
effect = 只初始化一次**
```
import { useRef, useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const countRef = useRef(count)

  // 🔥 同步最新值
  useEffect(() => {
    countRef.current = count
  }, [count])

  useEffect(() => {
    const timer = setInterval(() => {
      console.log(countRef.current)
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  )
}
```
# 经典组合 useRef + useEffect
✅ 场景1：防止重复执行
```
const hasRun = useRef(false)

useEffect(() => {
  if (hasRun.current) return

  hasRun.current = true
  console.log('只执行一次（严格模式下也安全）')
}, [])
```
✅ 场景2：事件监听
```
useEffect(() => {
  const handler = () => {
    console.log(countRef.current)
  }

  window.addEventListener('click', handler)

  return () => {
    window.removeEventListener('click', handler)
  }
}, [])
```
👉 否则：

监听函数拿到旧 state ❌
✅ 场景3：保存上一次值
```
const prevCount = useRef()

useEffect(() => {
  prevCount.current = count
}, [count])
```
# 模型
```
state：驱动 UI
ref：存储最新值（不触发 render）
effect：同步副作用
```

```
state 变化 → render
           ↓
        useEffect
           ↓
   同步到 ref / 外部系统
```

# 总结 
useRef 是什么？  
**一个跨 render 持久的可变容器**  

为什么要配合 useEffect？  
**解决闭包问题，让副作用拿到最新数据**


核心价值  
**让“异步逻辑”和“最新状态”保持一致**