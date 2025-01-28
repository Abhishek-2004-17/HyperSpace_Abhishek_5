"use client";

import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const data: ChartData<'line'> = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Sales',
      data: [33, 53, 85, 41, 44, 65, 72],
      fill: false,
      backgroundColor: '#1C64F2',
      borderColor: '#1C64F2',
      pointBackgroundColor: '#ff6384',
      pointBorderColor: '#ff6384',
      pointBorderWidth: 3,
      pointHoverBackgroundColor: '#ffce56',
      pointHoverBorderColor: '#ff6384',
      pointHoverBorderWidth: 5,
      pointRadius: 6,
      pointHoverRadius: 8,
    },
  ],
};

const options: ChartOptions<'line'> = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Sales Over Time',
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const Chart: React.FC = () => {
  return <Line data={data} options={options} />;
};

export default Chart;
