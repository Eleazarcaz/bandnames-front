import React from 'react';
import { Layout as LayoutTemplate } from 'antd';
import Header from '../Header/Header';
import Content from '../Content/Content';

const Layout = () => {
  return (
    <LayoutTemplate>
      <Header />
      <Content />
    </LayoutTemplate>
  );
};

export default Layout;
