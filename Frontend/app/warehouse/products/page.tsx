"use client";

import Tables from "@/components/warehouse/products/Tables";

import { SideBar } from "@/components/warehouse/SideBar";
import { useRouter } from "next/navigation";
import React from "react";

export default function Page() {
  const router = useRouter();

  const handleAddWarehouseBtn = () => {
    router.push("/warehouse/products/add");
  };

  return (
    <>
      <SideBar />

      <div className="sm:ml-72 mx-16 my-12">
        <div className="flex justify-between items-center my-5">
          <h2 className="text-3xl font-bold">All Warehouses</h2>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={handleAddWarehouseBtn}
          >
            Add Warehouse
          </button>
        </div>

        <Tables />
      </div>
    </>
  );
}
