/**
 * 主布局组件
 */

import React from 'react';
import './MainLayout.css';

interface MainLayoutProps {
  children: React.ReactNode;
  header?: React.ReactNode;
  sidebar?: React.ReactNode;
  footer?: React.ReactNode;
}

export function MainLayout({ children, header, sidebar, footer }: MainLayoutProps) {
  return (
    <div className="main-layout">
      {header && <header className="main-layout__header">{header}</header>}
      
      <div className="main-layout__content-wrapper">
        {sidebar && <aside className="main-layout__sidebar">{sidebar}</aside>}
        
        <main className="main-layout__main">{children}</main>
      </div>
      
      {footer && <footer className="main-layout__footer">{footer}</footer>}
    </div>
  );
}

export default MainLayout;
