"use client"

// components/PieChart.tsx

import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, TooltipItem } from 'chart.js';


// Registering necessary components of Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

// TypeScript interface for the chart props
interface PieChartProps {
  data: number[];
  labels: string[];
  descriptions: string[];
  warehouses: string[];
}

const PieChart: React.FC<PieChartProps> = ({ data, labels, descriptions, warehouses }) => {
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Remaining Products',
        data: data,
        backgroundColor: [
          '#8D8741', // muted brown
          '#659DBD', // soft blue
          '#DAAD86', // light beige
          '#BC986A', // classic tan
          '#FBEEC1', // pale cream
          '#C5C6C7'  // light gray
        ],
        borderColor: '#333', // darker border for contrast
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false, // Allows customizing the size
    plugins: {
      tooltip: {
        callbacks: {
          // Tooltip content customization
          label: (context: TooltipItem<'pie'>) => {
            const index = context.dataIndex;
            return `${labels[index]}: ${data[index]} left in ${warehouses[index]} (${descriptions[index]})`;
          },
        },
      },
      legend: {
        position: 'top' as const, // Display legend at the top
        labels: {
          font: {
            size: 14, // Medium-sized font
          },
        },
      },
    },
  };

  return (
    <div style={{ width: '400px', height: '400px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>
        Warehouse Product Distribution
      </h2>
      <Pie data={chartData} options={chartOptions} />
    </div>
  );
};

export default PieChart;