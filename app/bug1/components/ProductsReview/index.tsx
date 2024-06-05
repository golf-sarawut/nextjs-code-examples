"use client";
import ProductList from "../ProductList";
import { useProductRatings } from "../hooks/useProductsRating";

export const ProductsReview = () => {
  const useProductRatingProps = useProductRatings();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product Reviews</h1>
      <ProductList {...useProductRatingProps} />
    </div>
  );
};
