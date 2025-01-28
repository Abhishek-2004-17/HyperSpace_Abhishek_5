"use client";

import PieChart from '@/components/warehouse/Dashboard/Chart';  // Make sure the path is correct for PieChart
import { SideBar } from '@/components/warehouse/SideBar';  // Sidebar component for navigation
import React from 'react';

const WarehouseDashboard: React.FC = () => {
  // Sample data for the pie chart
  const data = [200, 100]; // Remaining product counts in various categories
  const labels = [
    'Warehouse A',  // Label for available space
    'Warehouse B', // Label for unavailable space
  ];
  const descriptions = [
    'Avaliable space',  // Description for available space
    'Avaliable space',  // Description for unavailable space
  ];
  const warehouses = [
    'A Warehouse',  // Name of the warehouse 1
    'B Warehouse',  // Name of the warehouse 2
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
        {/* PieChart component displaying warehouse data */}
        <PieChart
          data={data}           // Passing product counts
          labels={labels}       // Passing labels for the data
          descriptions={descriptions}  // Descriptions for tooltips
          warehouses={warehouses} // Warehouse names
        />
      </div>
    </div>
  );
};

export default WarehouseDashboard;
