import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const ActivityHours = ({ activityHours }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  useEffect(() => {
          const ctx = chartRef.current.getContext('2d');
      
          if (chartInstance.current) {
            chartInstance.current.destroy();
          }
      
          chartInstance.current = new Chart(ctx, {
            type: 'bar',
            data: {
              labels: activityHours.map(activity => activity.date),
              datasets: [
                {
                  label: 'Hours',
                  data: activityHours.map(activity => activity.hours),
                  backgroundColor: 'rgba(75, 192, 192, 0.2)',
                  borderColor: 'rgba(75, 192, 192, 1)',
                  borderWidth: 1,
                },
                {
                  label: 'Lessons Taken',
                  data: activityHours.map(activity => activity.lessons_taken),
                  backgroundColor: 'rgba(153, 102, 255, 0.2)',
                  borderColor: 'rgba(153, 102, 255, 1)',
                  borderWidth: 1,
                },
                {
                  label: 'Exams Completed',
                  data: activityHours.map(activity => activity.exams_completed),
                  backgroundColor: 'rgba(255, 159, 64, 0.2)',
                  borderColor: 'rgba(255, 159, 64, 1)',
                  borderWidth: 1,
                },
              ],
            },
            options: {
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
              responsive: true,
              maintainAspectRatio: false,
            },
          });
        }, [activityHours]);
  return (
          <div className="activity-hours bg-white rounded shadow w-full h-96 p-4">
          <h3 className="text-2xl mb-4">Activity Hours</h3>
          <div className="h-full">
            <canvas ref={chartRef} className="w-full h-full"></canvas>
          </div>
        </div>
    );
};

export default ActivityHours;
