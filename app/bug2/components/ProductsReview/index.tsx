"use client";
import { useState } from "react";
import { ProductCategoryDropdown } from "../CategoryDropdown";
import ProductList from "../ProductList";
import { bookProducts, electronicProducts } from "../../repositories/product";

export const ProductsReview = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("1");
  return (
    <div className="container mx-auto p-4 flex flex-col gap-y-[15px]">
      <>
        <div className="flex flex-col gap-y-[25px] w-fit">
          <ProductCategoryDropdown
            defaultCategory={selectedCategory}
            onSelect={setSelectedCategory}
          />
          {selectedCategory === "1" ? (
            <ProductList
              categoryName="Electronics"
              products={electronicProducts}
            />
          ) : selectedCategory === "2" ? (
            <ProductList categoryName="Books" products={bookProducts} />
          ) : null}
        </div>
      </>
    </div>
  );
};
