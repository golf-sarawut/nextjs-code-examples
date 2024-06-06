import React, { useCallback } from "react";
import { ProductReviewItem } from "../ProductReviewItem";
import { useProductRatings } from "../hooks/useProductsRating";
import { Product } from "../../domain/product";

const ProductList = ({
  products,
  categoryName,
}: {
  products: Product[];
  categoryName: string;
}) => {
  const {
    onRate,
    reviews,
    setReviews,
    submitFeedback: submitReview,
  } = useProductRatings(products);

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => setReviews(e.target.value),
    [setReviews]
  );

  return (
    <div className="flex flex-col gap-y-[15px]">
      <h1 className="text-2xl font-bold">
        Product Reviews for {categoryName}{" "}
      </h1>
      <ul className="space-y-4 w-fit">
        {products.map((product) => (
          <ProductReviewItem
            key={product.id}
            product={product}
            onRate={onRate}
          />
        ))}
      </ul>
      <div className="flex flex-col gap-y-[15px]">
        <textarea
          onChange={onChange}
          value={reviews}
          className="w-full h-24 p-2 text-black border border-gray-300 rounded"
          placeholder={`Add your feedbacks here...`}
        />
        <input
          onClick={submitReview}
          type="submit"
          value={`Submit Feedback for ${categoryName.toLocaleLowerCase()} products`}
          className="w-full p-2 text-white bg-blue-500 rounded cursor-pointer hover:bg-blue-600"
        />
      </div>
    </div>
  );
};

export default ProductList;
