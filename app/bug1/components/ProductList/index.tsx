import React from "react";
import { ProductReviewItem } from "../ProductReviewItem";
import { UseProductRatingProps } from "../hooks/useProductsRating";

type ProductListProps = UseProductRatingProps;

const ProductList = ({ products, removeProduct, onRate }: ProductListProps) => {
  return (
    <ul className="space-y-4">
      {products.map((product, index) => (
        <ProductReviewItem
          key={index}
          product={product}
          onRemove={removeProduct}
          onRate={onRate}
        />
      ))}
    </ul>
  );
};

export default ProductList;
