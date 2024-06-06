import React from "react";
import { DropdownList } from "../DropdownList";

type ProductRatingDropdownProps = {
  onRate: (rating: string) => void;
};

export const ProductRatingDropdown: React.FC<ProductRatingDropdownProps> = ({ onRate }) => {
  const options = [
    { value: "", label: "Select rating" },
    { value: "3", label: "👍" },
    { value: "2", label: "🆗" },
    { value: "1", label: "👎" },
  ];

  return (
    <DropdownList
      options={options}
      defaultValue=""
      onChange={onRate}
      required
    />
  );
};
