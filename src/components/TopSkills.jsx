import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const TopSkills = ({ topSkills }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: topSkills.map(skill => skill.skill),
        datasets: [{
          label: 'Top Skills',
          data: topSkills.map(skill => skill.employees),
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        plugins:{
          legend: {
            labels: {
              font: {
                size: 20
              }
            }
          }
        },
        scales: {
          yAxes: [{
              ticks: {
                  beginAtZero:true
              }
          }]
      },
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }, [topSkills]);

  return (
    <div className="bg-white rounded shadow w-full h-full p-8 text-center sm:text-left">
      <h3 className="text-2xl mb-4">Top Skills</h3>
      <div className="h-full chart-container">
        <canvas ref={chartRef} className="w-full h-full"></canvas>
      </div>
    </div>
  );
};

export default TopSkills;
