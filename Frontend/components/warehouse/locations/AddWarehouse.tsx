"use client";

import { useRouter } from "next/navigation";
import { FC, FormEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";

const AddWarehouse: FC = () => {
  const [warehouseName, setWarehouseName] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [availableSpace, setAvailableSpace] = useState<number>(0);

  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (warehouseName == "" || location == "" || availableSpace <= -1) {
      toast.error("Please fill all fields");
      return;
    }

    const client = localStorage.getItem("client") || "";

    if (client == "") {
      router.push("/client/login");
      return;
    }

    const formdata = new FormData();
    formdata.append("name", warehouseName);
    formdata.append("location", location);
    formdata.append("availableSpace", availableSpace.toString());
    formdata.append("client", client);

    const res = await fetch(
      "https://mvr40.pythonanywhere.com/api/v1/addwarehouse",
      {
        method: "POST",
        body: formdata,
      }
    );

    if (res.status == 200) {
      toast.success("Warehouse added successfully");
      router.push("/client/warehouses");
    } else {
      toast.error("Error adding warehouse");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("client") == null) {
      router.push("/client/login");
    }
  }, []);

  return (
    <form onSubmit={handleSubmit} className="m-10 rounded-3xl mx-32 p-10 bg-gray-900">
      <h1 className="text-4xl font-bold text-center">Add Warehouse</h1>
      <div className="my-6">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Warehouse Name
        </label>
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Warehouse Name"
          value={warehouseName}
          onChange={(e) => setWarehouseName(e.target.value)}
          required
        />
      </div>
      <div className="my-6">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Location
        </label>
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Warehouse Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
      </div>
      <div className="my-6">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Available Space (sq. ft.)
        </label>
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
