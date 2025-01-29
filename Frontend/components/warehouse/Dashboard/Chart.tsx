'use client';  // Add this line to make sure this is treated as a Client Component

import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { TooltipItem } from 'chart.js';

// Register the necessary components for Chart.js
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

interface BarChartProps {
  data: { available: number; total: number }[];  // Data for the bar chart (available and total space)
  labels: string[];         // Labels for the chart (e.g., warehouse names)
  descriptions: string[];   // Descriptions for tooltips (e.g., available/unavailable space)
}

const BarChart: React.FC<BarChartProps> = ({ data, labels, descriptions }) => {
  // Setting up the data for the bar chart with both datasets
  const chartData = {
    labels: labels,  // Warehouse names as labels
    datasets: [
      {
        label: 'Total Space',
        data: data.map(item => item.total),  // Total space values for each warehouse
        backgroundColor: '#FF6347',  // Red color for the bars (total space)
        borderColor: '#333',
        borderWidth: 1,
        barThickness: 20,  // Adjust bar thickness
        categoryPercentage: 0.8, // Adjust bar grouping
        barPercentage: 1.0,  // Adjust bar spacing
      },
      {
        label: 'Available Space',
        data: data.map(item => item.available),  // Available space values for each warehouse
        backgroundColor: '#659DBD',  // Blue color for the bars (available space)
        borderColor: '#333',
        borderWidth: 1,
        barThickness: 20,  // Adjust bar thickness
        categoryPercentage: 0.8, // Adjust bar grouping
        barPercentage: 1.0,  // Adjust bar spacing
      },
    ],
  };

  // Chart options for customization
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,  // Allow chart size to adjust independently of aspect ratio
    indexAxis: 'x' as const,  // Explicitly cast indexAxis as 'x' to avoid the type error
    plugins: {
      tooltip: {
        callbacks: {
          label: (context: TooltipItem<'bar'>) => {
            const index = context.dataIndex;
            const label = descriptions[index];
            const value = context.raw as number;  // Ensure raw is treated as a number
            return `${label}: ${value} sq. ft.`;  // Tooltip content customization
          },
        },
      },
      legend: {
        position: 'top' as const,
        labels: {
          font: {
            size: 14,
          },
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true, // Start the X-axis from 0
        ticks: {
          autoSkip: true,  // Automatically skip labels to avoid overlap
          maxRotation: 0,  // Prevent label rotation on X-axis
          padding: 10,     // Add some padding for better spacing
        },
      },
      y: {
        beginAtZero: true, // Start the Y-axis from 0
        ticks: {
          stepSize: 50, // Adjust this based on your data range
          min: 0,       // Minimum value for Y-axis
        },
      },
    },
  };

  return (
    <div style={{ position: 'relative', width: '80%', height: '400px', margin: '0 auto' }}> {/* Set width to 80% and center */}
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default BarChart;
