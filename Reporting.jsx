import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js';

const Reporting = () => {
  const data = {
    labels: ['LinkedIn Post', 'Email', 'Phone Call'],
    datasets: [
      {
        label: 'Communication Frequency',
        data: [5, 10, 3], // Example data
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h1>Reporting and Analytics</h1>
      <Bar data={data} />
    </div>
  );
};

export default Reporting;