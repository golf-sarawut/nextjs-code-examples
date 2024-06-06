import React from 'react';

type DropdownListProps = {
  options: { value: string; label: string }[];
  defaultValue: string;
  onChange: (value: string) => void;
  className?: string;
  required?: boolean;
};

export const DropdownList: React.FC<DropdownListProps> = ({ options, defaultValue, onChange, className, required }) => {
  return (
    <select
      defaultValue={defaultValue}
      className="p-2 w-fit border rounded text-black invalid:text-gray-400"
      onChange={(e) => onChange(e.target.value)}
      required={required}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value} disabled={option.value === ""}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
