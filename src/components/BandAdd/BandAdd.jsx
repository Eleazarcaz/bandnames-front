import React, { useState, useContext } from 'react';
import { Button, Form, Input, Typography } from 'antd';
import { SocketContext } from '../../context/SocketContext';

const BandAdd = () => {
  const { socket } = useContext(SocketContext);
  const [value, setValue] = useState('');

  const { Title } = Typography;

  const handleSubmit = () => {
    if (value.trim().length > 0) {
      socket.emit('crear-banda', { nombre: value });
      setValue('');
    }
  };

  return (
    <>
      <Title level={3}>Agregar Banda</Title>
      <Form name="form" onFinish={handleSubmit}>
        <Form.Item label="Nombre:">
          <Input onChange={(e) => setValue(e.target.value)} value={value} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Agregar
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default BandAdd;
