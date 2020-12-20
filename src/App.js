import React from 'react';
import SocketProvider from './context/SocketContext';
import Layout from './components/Layout/Layout';
import 'antd/dist/antd.css';

function App() {
  return (
    <SocketProvider>
      <Layout />
    </SocketProvider>
  );
}

export default App;
