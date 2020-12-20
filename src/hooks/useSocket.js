import { useState, useEffect, useMemo } from 'react';
import { io } from 'socket.io-client';

const useSocket = (serverPath) => {
  const socket = useMemo(() => io(serverPath, { transports: ['websocket'] }), [
    serverPath,
  ]);
  const [online, setOnline] = useState(false);

  useEffect(() => {
    setOnline(socket.connected);
  }, [socket]);
  console.log(socket.id);

  useEffect(() => {
    socket.on('connect', () => {
      setOnline(true);
    });

    return () => socket.emit('disconnect', 'byebye');
  }, [socket]);

  useEffect(() => {
    socket.on('disconnect', () => {
      setOnline(false);
    });

    return () => socket.disconnect();
  }, [socket]);

  return { socket, online };
};

export default useSocket;
