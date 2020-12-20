import React, { useContext } from 'react';
import { SocketContext } from '../../context/SocketContext';
import { Layout, Alert } from 'antd';

const Header = () => {
  const { online } = useContext(SocketContext);
  const { Header: HeaderTemplate } = Layout;

  return (
    <HeaderTemplate style={{ backgroundColor: 'white' }}>
      {online ? (
        <Alert message="Server Online" type="success" showIcon />
      ) : (
        <Alert message="Server Offline" type="error" showIcon />
      )}
    </HeaderTemplate>
  );
};

export default Header;
