"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface WarehouseDetails {
  warehouseName: string;
  location: string;
  availableSpace: number;
}

const Tables = () => {
  const [warehouses, setWarehouses] = useState<WarehouseDetails[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  async function getWarehouses() {
    const email = localStorage.getItem("client") || "";
    console.log("Client email:", email);  // Debugging

    if (!email) {
      router.push("/warehouse/login");
      return;
    }

    try {
      const res = await fetch(
        `https://mvr40.pythonanywhere.com/api/v1/get_warehouse_by_id?id=${email}`
      );

      if (!res.ok) {
        const errorData = await res.json();
        console.log("Error response from API:", errorData);  // Log the error response from the API
        throw new Error(`Failed to fetch warehouses. ${errorData.message || "Unknown error."}`);
      }

      const data = await res.json();
      console.log("API Response Data:", data);  // Debugging: Check response structure
      const warehouses = data.map((warehouse: string[]) => ({
        warehouseName: warehouse[1],
        location: warehouse[2],
        availableSpace: parseFloat(warehouse[3]),
      }));

      setWarehouses(warehouses);
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error("Error fetching warehouses:", err.message);
        setError(err.message);
      } else {
        console.error("Unknown error occurred during API fetch");
        setError("An unknown error occurred.");
      }
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getWarehouses();
  }, []);

  return (
    <div className="relative overflow-x-auto p-5">
      <h2 className="text-2xl font-semibold mb-4">Warehouse List</h2>
      {isLoading ? (
        <p className="text-center text-gray-500 dark:text-gray-400">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-500 dark:text-red-400">{error}</p>
      ) : warehouses.length > 0 ? (
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Warehouse Name</th>
              <th scope="col" className="px-6 py-3">Location</th>
              <th scope="col" className="px-6 py-3">Available Space</th>
            </tr>
          </thead>
          <tbody>
            {warehouses.map((warehouse, index) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {warehouse.warehouseName}
                </th>
                <td className="px-6 py-4">{warehouse.location}</td>
                <td className="px-6 py-4">{warehouse.availableSpace}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center text-gray-500 dark:text-gray-400">
          No warehouses available. Add some warehouses to display them here.
        </p>
      )}
    </div>
  );
};

export default Tables;
