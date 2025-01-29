"use client";

import { useState } from "react";
import { SideBar } from '@/components/warehouse/SideBar';

// Define the type for rent details
interface RentDetail {
  id: number;
  warehouse: string;
  productName: string;
  status: "Pending" | "Accepted"; // Removed "Paid" status
  dueDate: string;
  spaceRequired: number; // Space required column added
}

export default function RentPage() {
  const [rentDetails, setRentDetails] = useState<RentDetail[]>([
    {
      id: 1,
      warehouse: "A",
      productName: "Electronics",
      status: "Pending",
      dueDate: "2025-02-10 20:04",
      spaceRequired: 18,
    },
    {
      id: 2,
      warehouse: "B",
      productName: "Furniture",
      status: "Pending",
      dueDate: "2025-02-15 12:30",
      spaceRequired: 34,
    },
    {
      id: 3,
      warehouse: "C",
      productName: "Clothing",
      status: "Pending",
      dueDate: "2025-03-01 09:45",
      spaceRequired: 52,
    },
    {
      id: 4,
      warehouse: "A",
      productName: "Groceries",
      status: "Pending",
      dueDate: "2025-03-10 14:20",
      spaceRequired: 23,
    },
    {
      id: 5,
      warehouse: "B",
      productName: "Stationery",
      status: "Pending",
      dueDate: "2025-04-05 18:00",
      spaceRequired: 47,
    },
    {
      id: 6,
      warehouse: "C",
      productName: "Appliances",
      status: "Pending",
      dueDate: "2025-04-15 10:30",
      spaceRequired: 61,
    },
  ]);

  const handleAction = (id: number) => {
    setRentDetails((prevDetails) => prevDetails.filter((rent) => rent.id !== id));
  };

  return (
    <div className="min-h-screen flex bg-royal-blue">
      {/* Sidebar Section */}
      <div className="w-64 bg-gray-800 text-white p-6">
        <SideBar />
      </div>

      {/* Main Content Section */}
      <div className="flex-1 p-4 overflow-x-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Rent Management
        </h1>
        <div className="w-full max-w-5xl bg-gold rounded-lg shadow-lg p-6 overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-gray-900 dark:text-white">
            <thead>
              <tr className="bg-goldenrod">
                <th className="border border-gray-300 px-4 py-2 text-left">Warehouse name</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Product id</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Space Required</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Date and time</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {rentDetails.map((rent) => (
                <tr key={rent.id} className="hover:bg-lightgoldenrodyellow">
                  <td className="border border-gray-300 px-4 py-2">{rent.warehouse}</td>
                  <td className="border border-gray-300 px-4 py-2">{rent.id}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{rent.spaceRequired} m²</td>
                  <td className={`border border-gray-300 px-4 py-2 text-red-600`}>Pending</td>
                  <td className="border border-gray-300 px-4 py-2">{rent.dueDate}</td>
                  <td className="border border-gray-300 px-4 py-2 flex space-x-2">
                    <button
                      onClick={() => handleAction(rent.id)}
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => handleAction(rent.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                      Deny
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
