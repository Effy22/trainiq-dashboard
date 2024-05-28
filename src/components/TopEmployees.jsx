import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const TopEmployees = ({ topEmployees }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: topEmployees.map(employee => employee.name),
        datasets: [{
          label: 'Top Employees',
          data: topEmployees.map(employee => employee.current_score),
          fill: false,
          borderColor: 'rgba(255, 99, 132, 0.6)',
          tension: 0.4,
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Score'
            }
          },
          x: {
            title: {
              display: true,
              text: 'Employee'
            },
            ticks: {
              font: {
                weight: 'bold',
                style: 'normal',
                size: '18'
              },
              color: '#473ab0'
            }
          }
        }
      }
    });
  }, [topEmployees]);

  return (
    <div className="activity-hours bg-white rounded shadow w-full h-96 p-4 md:max-w-2xl">
      <h3 className="text-2xl mb-4">Top Employees</h3>
      <div className="h-full">
        <canvas ref={chartRef} className="w-full h-full"></canvas>
      </div>
    </div>
  );
};

export default TopEmployees;
