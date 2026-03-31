/**
 * 首页组件
 */

import React from 'react';
import { useCounter } from '../hooks/useCounter';
import Button from '../components/Button';
import UserCard from './component/UserCard';
import PropsDemo from './props/ParentDemo';
import Calcarator  from './states/calcarator';
import KeyDemo  from './key/KeyDemo';
import EventDemo  from './event/EventDemo';
import EffectDemo from './effect/EffectDemo';



export function Home() {
  const user = { name: 'John Doe', age: 30, src: 'https://i.pravatar.cc/300', width: 300, height: 300 };

  const stock= { name: 'Stock Name', price: 100, change: 5, changePercent: 0.05 };

  return (
    <div className="home-page">
     
      
      <div style={{ marginTop: '2rem', textAlign: 'left' }}>
        <h2>项目结构说明</h2>
        <ul>
          <li><strong>components/</strong> - 可复用的 UI 组件</li>
          <li><strong>pages/</strong> - 页面级组件</li>
          <li><strong>hooks/</strong> - 自定义 Hooks</li>
          <li><strong>utils/</strong> - 工具函数</li>
          <li><strong>services/</strong> - API 服务层</li>
          <li><strong>store/</strong> - 状态管理</li>
          <li><strong>types/</strong> - TypeScript 类型定义</li>
          <li><strong>constants/</strong> - 常量定义</li>
          <li><strong>assets/</strong> - 静态资源</li>
          <li><strong>layouts/</strong> - 布局组件</li>
        </ul>
      </div>

      <UserCard  user={user} stockList={stock} > 
       <h3>我要赚钱</h3>
       <span>股票价格：{stock.price}</span> 
       </UserCard>  

      <h1> ======================props======================= </h1>
      <PropsDemo />


      <h1> ======================states======================= </h1>
      <Calcarator />


      <h1> ======================key======================= </h1>
      <KeyDemo />

      <h1> ======================event======================= </h1>
      <EventDemo />

      <h1> ======================effect======================= </h1>
      <EffectDemo />

    </div>
  );
}

export default Home;
