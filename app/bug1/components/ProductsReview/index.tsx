"use client";
import { useState } from "react";

export const ProductsReview = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Product A" },
    { id: 2, name: "Product B" },
    { id: 3, name: "Product C" },
  ]);

  const removeProducts = (productId: number) => {
    const updatedProducts = products.filter(
      (product) => product.id !== productId
    );
    setProducts(updatedProducts);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product Reviews</h1>
      <ul className="space-y-4">
        {products.map((product, index) => (
          <li
            key={index}
            className="flex w-fit	 items-center justify-between bg-white p-4 rounded shadow"
          >
            <div className="flex w-fit	 items-center">
              <span className="font-medium text-black">{product.name}</span>
              <select
                defaultValue=""
                className="ml-4 p-2 border rounded text-black"
              >
                <option value="" disabled>
                  Please rate this product
                </option>
                <option value="3">👍</option>
                <option value="2">🆗</option>
                <option value="1">👎</option>
              </select>
            </div>
            <button
              onClick={() => removeProducts(product.id)}
              className="ml-4 p-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
