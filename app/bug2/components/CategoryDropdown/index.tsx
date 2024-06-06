import React from "react";
import { DropdownList } from "../DropdownList";
import { categories } from "../../repositories/category";

type ProductCategoryDropdownProps = {
  defaultCategory: string;
  onSelect: (categoryId: string) => void;
};

export const ProductCategoryDropdown: React.FC<
  ProductCategoryDropdownProps
> = ({ defaultCategory, onSelect }) => {
  const options = [
    ...categories.map((category) => ({
      value: category.id.toString(),
      label: category.name,
    })),
  ];

  return (
    <div className="flex flex-row gap-x-[15px] items-center">
      <div>Category</div>
      <DropdownList
        options={options}
        defaultValue={defaultCategory}
        onChange={onSelect}
      />
    </div>
  );
};
