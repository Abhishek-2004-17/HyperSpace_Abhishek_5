"use client"

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
  Filler,
} from 'chart.js';
import { SideBar } from '@/components/client/SideBar';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const data = {
  labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
  datasets: [
    {
      label: 'Electronics',
      data: [500, 600, 750, 800],
      borderColor: '#6A5ACD',
      backgroundColor: 'rgba(106, 90, 205, 0.2)',
      pointBackgroundColor: '#6A5ACD',
      pointBorderColor: '#6A5ACD',
      pointBorderWidth: 2,
      pointRadius: 6,
      pointHoverRadius: 8,
      fill: true,
      tension: 0.4,
    },
    {
      label: 'Furniture',
      data: [220, 400, 350, 600],
      borderColor: '#FF8C00',
      backgroundColor: 'rgba(255, 140, 0, 0.2)',
      pointBackgroundColor: '#FF8C00',
      pointBorderColor: '#FF8C00',
      pointBorderWidth: 2,
      pointRadius: 6,
      pointHoverRadius: 8,
      fill: true,
      tension: 0.4,
    },
    {
      label: 'Clothing',
      data: [320, 450, 650, 720],
      borderColor: '#2E8B57',
      backgroundColor: 'rgba(46, 139, 87, 0.2)',
      pointBackgroundColor: '#2E8B57',
      pointBorderColor: '#2E8B57',
      pointBorderWidth: 2,
      pointRadius: 6,
      pointHoverRadius: 8,
      fill: true,
      tension: 0.4,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
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

const Home: React.FC = () => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Sidebar */}
      <SideBar />
      {/* Main Content */}
      <div style={{ flex: 1, padding: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 style={{ textAlign: 'center', marginTop: '2rem' }}>
          Warehouse Management Dashboard
        </h1>
        <div style={{ width: '80%', maxWidth: '800px' }}>
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default Home;