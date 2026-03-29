# useState 是什么
 useState = 让组件“有记忆”的能力

 # 核心机制
 ## State 驱动 UI
 ```
 点击按钮 → setState → React重新渲染 → UI更新 
 ```
 "你改数据，React 帮你更新 UI"

 # useState 的 3 个核心规则

 - 不能直接修改 state
 - state 更新会触发重新渲染
 - state 是“快照”

 # 你必须建立的终极模型
 ```
 state = 数据源
UI = state 的映射

state 变化 → UI 自动更新
 ```

#  常见坑
## 1. 连续 setState 不生效

👉 原因：state 是快照  
👉 解决：函数式更新  
错误：setCount(count + 1)  
正确：setCount(c => c + 1)

## 2. 修改对象不更新
👉 原因：引用没变  
👉 解决：返回新对象  
错误：
```
const [user, setUser] = useState({
  name: 'Alice',
  age: 25
})
user.age = 30 
```
正确： 必须用对象
```
setUser({
  ...user,
  age: 30
})
```