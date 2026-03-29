# React 事件的本质
 React 事件 = 对原生 DOM 事件的封装（统一接口 + 更好控制） 

# SyntheticEvent（合成事件）
React 并不是直接用浏览器事件，而是：  
**封装了一层统一事件对象：SyntheticEvent**
```
function App() {
  function handleClick(e) {
    console.log(e) // SyntheticEvent
    console.log(e.target) // 原生 DOM
  }

  return <button onClick={handleClick}>点我</button>
}
```
React 不是每个节点都绑定事件，而是：  
**事件统一挂在根节点（React 17+ 是 root 容器）**

# 事件传参（高频场景）
正确写法（箭头函数） 
```javaScript
<button onClick={() => handleClick(1)}>点我</button>
```
同时获取 event  
```
function handleClick(id, e) {
  console.log(id, e)
}

<button onClick={(e) => handleClick(1, e)}>
  点我
</button>
```
# 阻止默认行为 & 冒泡
阻止默认行为  
```
function handleSubmit(e) {
  e.preventDefault()
}
```

阻止事件冒泡  
```
function handleClick(e) {
  e.stopPropagation()
}
```

# 受控组件（事件 + state 结合）
**输入事件 → setState → UI更新**  
这就是：  
**受控组件（Controlled Component）**

# React 完整数据流  
```
用户操作（事件）
   ↓
触发函数（onClick / onChange）
   ↓
setState
   ↓
组件重新渲染
   ↓
UI更新
```

#  终极理解
**React 本质不是“操作 DOM”，而是：用事件驱动 state，用 state 驱动 UI** 