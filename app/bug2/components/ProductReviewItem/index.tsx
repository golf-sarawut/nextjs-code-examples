import React from "react";
import { ProductRatingDropdown } from "../ProductRatingDropdown";
import { Product } from "../../domain/product";

type ProductReviewItemProps = {
  product: Product;
  onRate: (productId: number, rate: string) => void;
};

export const ProductReviewItem = ({
  product,
  onRate,
}: ProductReviewItemProps) => {
  return (
    <li className="flex items-center justify-between bg-white p-4 rounded shadow">
      <div className="flex gap-x-[15px] w-fit items-center">
        <span className="font-medium text-black">{product.name}</span>
        <ProductRatingDropdown
          onRate={(rating) => onRate(product.id, rating)}
        />
      </div>
    </li>
  );
};
