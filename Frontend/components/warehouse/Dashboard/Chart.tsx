"use client";

// Import necessary libraries for the pie chart
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, TooltipItem } from 'chart.js';

// Register necessary components of Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

// TypeScript interface for the PieChart props
interface PieChartProps {
  data: number[];          // Data for each segment in the pie chart
  labels: string[];        // Labels for each segment
  descriptions: string[];  // Descriptions for tooltips
  warehouses: string[];    // Warehouse names
}

const PieChart: React.FC<PieChartProps> = ({ data, labels, descriptions, warehouses }) => {
  // Defining the data for the pie chart
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Remaining Products', // Label for the dataset
        data: data,                  // Data to be displayed
        backgroundColor: [
          '#8D8741', // muted brown
          '#659DBD', // soft blue
          '#DAAD86', // light beige
          '#BC986A', // classic tan
          '#FBEEC1', // pale cream
          '#C5C6C7'  // light gray
        ],
        borderColor: '#333',         // Darker border for contrast
        borderWidth: 1,
      },
    ],
  };

  // Defining chart options including tooltip and legend customization
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false, // Allows customizing the size
    plugins: {
      tooltip: {
        callbacks: {
          // Customize the tooltip content
          label: (context: TooltipItem<'pie'>) => {
            const index = context.dataIndex;
            return `${labels[index]}: ${data[index]} left in ${warehouses[index]} (${descriptions[index]})`;
          },
        },
      },
      legend: {
        position: 'top' as const,  // Position the legend at the top
        labels: {
          font: {
            size: 14,  // Medium font size for the legend
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
