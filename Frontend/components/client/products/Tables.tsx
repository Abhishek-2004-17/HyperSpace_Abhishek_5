"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface ProductDetails {
  name: string;
  price: number;
  category: string;
  spaceRequirement: string;
  type: "Static" | "Dynamic";
}

export const Tables = () => {
  const [products, setProducts] = useState<ProductDetails[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true); // Added a loading state
  const [error, setError] = useState<string | null>(null); // Added an error state

  const router = useRouter();

  async function getProducts() {
    const email = localStorage.getItem("client") || "";

    if (!email) {
      router.push("/client/login");
      return;
    }

    try {
      const res = await fetch(
        `https://mvr40.pythonanywhere.com/api/v1/get_product_by_client_id?client_id=${email}`
      );

      if (!res.ok) {
        throw new Error("Failed to fetch products. Please try again later.");
      }

      const data = await res.json();

      // Transform the response to match the ProductDetails interface
      const products = data.map((product: string[]) => ({
        name: product[1],
        price: parseFloat(product[3]), // Ensure price is a number
        category: product[4],
        spaceRequirement: product[5], // Assuming space requirement is at index 5
        type: product[6] === "Static" ? "Static" : "Dynamic", // Assuming type is at index 6
      }));

      setProducts(products);
    } catch (err: unknown) {  // Changed to 'unknown'
      if (err instanceof Error) {
        setError(err.message); // Type guard for Error type
      } else {
        setError("An unknown error occurred.");
      }
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="relative overflow-x-auto p-5">
      <h2 className="text-2xl font-semibold mb-4">Product List</h2> {/* Hardcoded field name */}
      {isLoading ? (
        <p className="text-center text-gray-500 dark:text-gray-400">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-500 dark:text-red-400">{error}</p>
      ) : products.length > 0 ? (
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Product Name</th>
              <th scope="col" className="px-6 py-3">Price</th>
              <th scope="col" className="px-6 py-3">Space Requirement</th>
              <th scope="col" className="px-6 py-3">Type</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                key={index}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {product.name}
                </th>
                <td className="px-6 py-4">₹{product.price.toFixed(2)}</td>
                <td className="px-6 py-4">{product.spaceRequirement}</td>
                <td className="px-6 py-4">{product.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center text-gray-500 dark:text-gray-400">
          No products available. Add some products to display them here.
        </p>
      )}
    </div>
  );
};





