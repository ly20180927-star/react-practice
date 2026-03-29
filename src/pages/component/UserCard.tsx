import React from 'react';
import UserInfo from './UserInfo';
import Avatar from './Avatar';

// 直接解构 + 类型定义， children 是比较特殊属性，代表的是父组件的子元素
export default function UserCard({user, stockList, children}: any) {
   

  return (
    <div style={{ padding: 16, backgroundColor: '#72deadff' }}>
      <Avatar src={user.src} width={user.width} height={user.height} />
      <UserInfo name={stockList.name} age={user.age} />
    {children}
    </div>
  );
}
