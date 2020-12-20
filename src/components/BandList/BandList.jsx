import React, { useContext, useState, useEffect } from 'react';
import { SocketContext } from '../../context/SocketContext';
import { Table, Input, Space, Button } from 'antd';

const BandList = () => {
  const [bands, setBands] = useState([]);
  const { socket } = useContext(SocketContext);

  useEffect(() => {
    socket.on('current-bands', (data) => {
      setBands(data.map((item) => ({ ...item, key: item.id })));
    });
  }, [socket]);

  const handleChangeValue = (id, value) => {
    setBands(
      bands.map((band) => (band.id === id ? { ...band, name: value } : band)),
    );
  };

  const columns = [
    {
      title: 'Nombre',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => (
        <Input
          onChange={(e) => handleChangeValue(record.id, e.target.value)}
          onBlur={(e) =>
            socket.emit('cambiar-nombre-banda', {
              id: record.id,
              nombre: e.target.value,
            })
          }
          value={text}
        />
      ),
    },
    {
      title: 'Votos',
      dataIndex: 'votes',
      key: 'votes',
      render: (text) => <p>{text}</p>,
    },
    {
      title: 'Action',
      key: 'action',
      render: (record) => (
        <Space size="middle">
          <Button
            type="link"
            onClick={() => socket.emit('votar-banda', record.id)}
          >
            Vote +1
          </Button>
          <Button onClick={() => socket.emit('borrar-banda', record.id)}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return <Table columns={columns} dataSource={bands} pagination={false} />;
};

export default BandList;
