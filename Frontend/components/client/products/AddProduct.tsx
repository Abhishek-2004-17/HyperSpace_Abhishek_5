"use client";

import { useRouter } from "next/navigation";
import { FC, FormEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";

const AddProduct: FC = () => {
  const [productName, setProductName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [spaceRequirement, setSpaceRequirement] = useState<string>("");
  const [type, setType] = useState<string>("");

  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (
      productName === "" ||
      price <= 0 ||
      spaceRequirement === "" ||
      type === ""
    ) {
      toast.error("Please fill all fields");
      return;
    }

    const client = localStorage.getItem("client") || "";

    if (!client) {
      router.push("/client/login");
      return;
    }

    const formdata = new FormData();
    formdata.append("name", productName);
    formdata.append("price", price.toString());
    formdata.append("spaceRequirement", spaceRequirement);
    formdata.append("type", type);
    formdata.append("client", client);

    try {
      const res = await fetch(
        "https://mvr40.pythonanywhere.com/api/v1/addproduct",
        {
          method: "POST",
          body: formdata,
        }
      );

      if (res.ok) {
        toast.success("Product added successfully");
        router.push("/client/products");
      } else {
        const errorData = await res.json();
        toast.error(`Error: ${errorData.message || "Something went wrong"}`);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(`Error: ${error.message}`);
      } else {
        toast.error("An unknown error occurred.");
      }
    }
  };

  useEffect(() => {
    if (localStorage.getItem("client") == null) {
      router.push("/client/login");
    }
  }, []);

  return (
    <form onSubmit={handleSubmit} className="m-10 rounded-3xl mx-32 p-10 bg-gray-900">
      <h1 className="text-4xl font-bold text-center text-white">Add Products</h1>
      <div className="my-6">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />
      </div>
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
        <input
          type="number"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
          value={price}
          onChange={(e) => setPrice(parseInt(e.target.value))}
          placeholder="Product Price"
        />
      </div>
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Space Requirement</label>
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Space Requirement"
          value={spaceRequirement}
          onChange={(e) => setSpaceRequirement(e.target.value)}
          required
        />
      </div>
      <div className="mb-9">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type</label>
        <select
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        >
          <option value="">Select Type</option>
          <option value="Static">Static</option>
          <option value="Dynamic">Dynamic</option>
        </select>
      </div>
      <div className="w-full flex justify-center">
        <button
          type="submit"
          className="w-1/2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add Product
        </button>
      </div>
    </form>
  );
};

export default AddProduct;







