import React from 'react';
import { Product } from '../../domain/Product';
import { ProductRating } from '../ProductRating';

type ProductReviewItemProps = {
    product: Product;
    onRemove: (productId: number) => void;
    onRate: (productId: number, rate: string) => void;
}

export const ProductReviewItem = ({ product, onRemove, onRate }: ProductReviewItemProps) => {
  return (
    <li className="flex w-fit items-center justify-between bg-white p-4 rounded shadow">
      <div className="flex w-fit items-center">
        <span className="font-medium text-black">{product.name}</span>
        <ProductRating onRate={(rating)=> onRate(product.id, rating)}/>
      </div>
      <button
        onClick={() => onRemove(product.id)}
        className="ml-4 p-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Delete
      </button>
    </li>
  );
};