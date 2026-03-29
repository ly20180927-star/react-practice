# 列表渲染
 用数组 → 生成组件列表


# key 是什么（本质）
key = React 用来识别“这个元素是谁”的唯一标识  
**key 决定 React 如何“复用组件”还是“销毁重建组件”**

```
const list = [
  { id: 1, name: '苹果' },
  { id: 2, name: '香蕉' },
  { id: 3, name: '橙子' }
]

export default function App() {
  return (
    <ul>
      {list.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  )
}
```

# 为什么必须要 key（核心机制） 
React 在更新 UI 时，不是全部重渲染，而是：做 Diff（差异比较）  

 # 为什么不能用 index
头部插入元素的时候，index 会改变，导致 Diff 比较失败

# key 的正确使用规则
1. key 必须是唯一的  
2. 必须稳定（不能变） 
3. 不能用 index 作为 key，优先用后端 ID


# 必须建立的底层认知
```
setState
   ↓
生成新的虚拟 DOM
   ↓
和旧的虚拟 DOM 做 Diff
   ↓
根据 key 找到对应节点
   ↓
最小化更新真实 DOM
```