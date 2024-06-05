import React from 'react';

type ProductRatingProps = {
  onRate: (rating: string) => void;
};

export const ProductRating: React.FC<ProductRatingProps> = ({ onRate }) => {
  return (
    <select
      defaultValue=""
      className="ml-4 p-2 border rounded text-black invalid:text-gray-400"
      onChange={(e) => onRate(e.target.value)}
      required
    >
      <option value="" disabled>
        Please rate this product
      </option>
      <option value="3">👍</option>
      <option value="2">🆗</option>
      <option value="1">👎</option>
    </select>
  );
};
