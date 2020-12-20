import React, { useContext, useEffect } from 'react';
import Chart from 'chart.js';
import { SocketContext } from '../../context/SocketContext';

const ChartBar = () => {
  const { socket } = useContext(SocketContext);

  useEffect(() => {
    socket.on('current-bands', (data) => {
      createGraph(data);
    });
  }, [socket]);

  const createGraph = (data) => {
    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
      type: 'horizontalBar',
      data: {
        labels: data.map((item) => item.name),
        datasets: [
          {
            label: '# of Votes',
            data: data.map((item) => item.votes),
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        events: ['click'],
        animation: false,
        scales: {
          xAxes: [
            {
              stacked: true,
            },
          ],
        },
      },
    });
  };

  return <canvas id="myChart" style={{ height: '400px' }}></canvas>;
};

export default ChartBar;
