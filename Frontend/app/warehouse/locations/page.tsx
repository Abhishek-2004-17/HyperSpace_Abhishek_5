"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { SideBar } from "@/components/warehouse/SideBar"; // Import Sidebar

interface WarehouseDetails {
  name: string;
  location: string;
  availableSpace: string;
}

const LocationsPage = () => {
  const [warehouses, setWarehouses] = useState<WarehouseDetails[]>([]);
  const router = useRouter();

  async function getWarehouses() {
    const email = localStorage.getItem("client") || "";

    if (email === "") {
      router.push("/client/login");
      return;
    }

    const res = await fetch(
      `https://mvr40.pythonanywhere.com/api/v1/get_warehouse_by_client_id?client_id=${email}`
    );
    const data = await res.json();

    const warehouses = data.map((warehouse: string[]) => ({
      name: warehouse[1],
      location: warehouse[2],
      availableSpace: warehouse[3],
    }));

    setWarehouses(warehouses);
  }

  useEffect(() => {
    getWarehouses();
  }, []);

  return (
    <div className="flex">
      {/* Sidebar */}
      <SideBar />

      <div className="sm:ml-72 mx-16 my-12 relative">
        {/* Add Warehouse Button */}
        <button
          type="button"
          onClick={() => router.push("/warehouse/locations/add")}
          className="absolute top-6 right-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Add Warehouse
        </button>

        <h2 className="text-3xl font-bold mb-8">Warehouses</h2>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 table-fixed">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Warehouse Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Location
                </th>
                <th scope="col" className="px-6 py-3">
                  Available Space
                </th>
              </tr>
            </thead>
            <tbody>
              {warehouses.map((warehouse, index) => (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  key={index}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {warehouse.name}
                  </th>
                  <td className="px-6 py-4">{warehouse.location}</td>
                  <td className="px-6 py-4">{warehouse.availableSpace}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LocationsPage;
