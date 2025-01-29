import React from "react";
import { SideBar } from '@/components/client/SideBar';

const data = [200, 150, 100, 50, 80, 120]; // Remaining product counts
const labels = [
  "Electronics",
  "Furniture",
  "Clothing",
  "Groceries",
  "Stationary",
  "Appliances",
];
const warehouses = [
  "A Warehouse",
  "B Warehouse",
  "C Warehouse",
  "A Warehouse",
  "B Warehouse",
  "C Warehouse",
];
const locations = ["Panvel", "Kharghar", "Nerul", "Vashi", "Seawoods", "Belapur"];
const initialQuantities = [300, 200, 150, 100, 120, 180]; // Initial stock values
const prices = [50000, 15000, 2000, 500, 300, 25000]; // Prices per unit in INR
const spaceRequired = [20, 50, 10, 5, 2, 40]; // Space required per unit in sq ft

const WarehouseTable: React.FC = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', margin: 0, padding: 0 }}>
      {/* Sidebar */}
      <div style={{
        width: '20%',
        padding: '10px',
        position: 'relative',
        height: '100vh',
        boxSizing: 'border-box',
      }}>
        <SideBar />
      </div>
      
      {/* Main content area */}
      <div style={{
        width: '100%',
        padding: '20px',
        marginTop: '140px',
        marginRight: '40px',
        marginLeft: '40px',
        overflowY: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        boxSizing: 'border-box',
      }}>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="border border-gray-300 p-2">Product Name</th>
              <th className="border border-gray-300 p-2">Warehouse</th>
              <th className="border border-gray-300 p-2">Location</th>
              <th className="border border-gray-300 p-2">Initial Quantity</th>
              <th className="border border-gray-300 p-2">Left Quantity</th>
              <th className="border border-gray-300 p-2">Price (INR)</th>
              <th className="border border-gray-300 p-2">Space Required (sq ft)</th>
            </tr>
          </thead>
          <tbody>
            {labels.map((label, index) => (
              <tr key={index} className="border border-gray-300">
                <td className="border border-gray-300 p-2">{label}</td>
                <td className="border border-gray-300 p-2">{warehouses[index]}</td>
                <td className="border border-gray-300 p-2">{locations[index]}</td>
                <td className="border border-gray-300 p-2">{initialQuantities[index]}</td>
                <td className="border border-gray-300 p-2">{data[index]}</td>
                <td className="border border-gray-300 p-2">₹{prices[index]}</td>
                <td className="border border-gray-300 p-2">{spaceRequired[index]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WarehouseTable;
