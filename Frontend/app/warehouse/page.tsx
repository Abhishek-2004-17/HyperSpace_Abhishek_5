import BarChart from '@/components/warehouse/Dashboard/Chart';  // Correct import for BarChart
import { SideBar } from '@/components/warehouse/SideBar';  // Sidebar component for navigation
import React from 'react';

const WarehouseDashboard: React.FC = () => {
  // Sample data for the bar chart with both available and total space for each warehouse
  const data = [
    { available: 200, total: 300 },  // Warehouse A: Available 200, Total 300
    { available: 100, total: 200 },  // Warehouse B: Available 100, Total 200
    { available: 150, total: 250 },  // Warehouse C: Available 150, Total 250
  ];

  // Labels for the chart (warehouse names)
  const labels = [
    'Warehouse A',
    'Warehouse B',
    'Warehouse C',
  ];

  // Descriptions for tooltips
  const descriptions = [
    'Available space in Warehouse A',
    'Available space in Warehouse B',
    'Available space in Warehouse C',
  ];

  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar component */}
      <SideBar />

      {/* Main content for Warehouse Dashboard */}
      <div style={{ flex: 1, padding: '2rem' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>
          Warehouse Management Dashboard
        </h1>
        {/* BarChart component displaying warehouse data */}
        <BarChart
          data={data}           // Passing the available and total space data directly
          labels={labels}       // Labels for the data
          descriptions={descriptions}  // Descriptions for tooltips
        />
      </div>
    </div>
  );
};

export default WarehouseDashboard;
