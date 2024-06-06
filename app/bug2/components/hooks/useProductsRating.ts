import { useCallback, useState } from "react";
import { Product } from "../../domain/product";

export type UseProductRatingProps = {
  onRate: (productId: number, rating: string) => void;
  reviews: string;
  setReviews: (reviews: string) => void;
  submitFeedback: () => void;
};

export const useProductRatings = (
  products: Product[]
): UseProductRatingProps => {
  const [reviews, setReviews] = useState<string>("");

  const onRate = useCallback(
    (productId: number, rating: string) => {
      console.log(
        `You gave ${
          products.find((product) => product.id === productId)?.name
        } a rating of ${rating}`
      );
    },
    [products]
  );

  const submitFeedback = () => {
    console.log(`You submitted a review: ${reviews}`);
  };

  return { onRate, reviews, setReviews, submitFeedback };
};
