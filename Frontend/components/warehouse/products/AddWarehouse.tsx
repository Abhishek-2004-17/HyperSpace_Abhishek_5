"use client";

import { useRouter } from "next/navigation";
import { FC, FormEvent, useState, useEffect } from "react";
import { toast } from "react-toastify";

// Define the type for the warehouse
interface Warehouse {
  name: string;
  location: string;
  capacity: number;
}

const AddWarehouse: FC = () => {
  const [warehouseName, setWarehouseName] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [availableSpace, setAvailableSpace] = useState<number>(0);
  const [existingWarehouses, setExistingWarehouses] = useState<Warehouse[]>([]);

  const router = useRouter();

  useEffect(() => {
    // Fetch existing warehouses on component mount
    async function fetchWarehouses() {
      const email = localStorage.getItem("client") || "";

      if (!email) {
        router.push("/warehouse/login");
        return;
      }

      try {
        const res = await fetch(
          `https://mvr40.pythonanywhere.com/api/v1/get_warehouses_by_client?id=${email}`
        );
        const data = await res.json();
        setExistingWarehouses(data); // Assuming the API response contains an array of warehouses
      } catch (error) {
        console.error("Error fetching warehouses:", error);
      }
    }

    fetchWarehouses();
  }, [router]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validation
    if (warehouseName === "" || location === "" || availableSpace <= 0) {
      toast.error("Please fill all fields");
      return;
    }

    // Check for duplicate warehouse
    const isDuplicate = existingWarehouses.some(
      (warehouse) =>
        warehouse.name.toLowerCase() === warehouseName.toLowerCase() &&
        warehouse.location.toLowerCase() === location.toLowerCase()
    );

    if (isDuplicate) {
      toast.error("This warehouse already exists.");
      return;
    }

    const client = localStorage.getItem("client") || "";

    if (!client) {
      router.push("/warehouse/login");
      return;
    }

    const formData = new FormData();
    formData.append("name", warehouseName);
    formData.append("location", location);
    formData.append("capacity", availableSpace.toString());
    formData.append("client_id", client);

    try {
      const res = await fetch("https://mvr40.pythonanywhere.com/api/v1/addwarehouse", {
        method: "POST",
        body: formData,
      });

      const responseData = await res.json();

      if (res.ok) {
        toast.success("Warehouse added successfully");
        router.push("/warehouse/products");
      } else {
        toast.error(`Error: ${responseData.message || "Something went wrong"}`);
      }
    } catch (error: unknown) {
      toast.error(`Error: ${(error instanceof Error) ? error.message : "Unknown error"}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="m-10 rounded-3xl mx-32 p-10 bg-gray-900">
      <h1 className="text-4xl font-bold text-center text-white">Add Warehouse</h1>
      <div className="my-6">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Warehouse Name</label>
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Warehouse Name"
          value={warehouseName}
          onChange={(e) => setWarehouseName(e.target.value)}
          required
        />
      </div>
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Location</label>
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
      </div>
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Available Space</label>
        <input
          type="number"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={availableSpace}
          onChange={(e) => setAvailableSpace(parseInt(e.target.value))}
          required
        />
      </div>
      <div className="w-full flex justify-center">
        <button
          type="submit"
          className="w-1/2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add Warehouse
        </button>
      </div>
    </form>
  );
};

export default AddWarehouse;
