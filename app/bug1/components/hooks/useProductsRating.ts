import { useState } from "react";
import { Product } from "../../domain/Product";

export type UseProductRatingProps = {
  products: Product[];
  removeProduct: (productId: number) => void;
  onRate: (productId: number, rating: string) => void;
};

export const useProductRatings = (): UseProductRatingProps => {
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: "Product A" },
    { id: 2, name: "Product B" },
    { id: 3, name: "Product C" },
  ]);

  const removeProduct = (productId: number) => {
    const updatedProducts = products.filter(
      (product) => product.id !== productId
    );
    setProducts(updatedProducts);
  };

  const onRate = (productId: number, rating: string) => {
    console.log(
      `You gave ${
        products.find((product) => product.id === productId)?.name
      } a rating of ${rating}`
    );
  };

  return { products, removeProduct, onRate };
};
