import { IFilter } from "@types";
import { PATH } from "constants/path";
import { useRouter } from "next/router";
import { useState } from "react";
import Select from "react-tailwindcss-select";

interface SelectProps {
  placeholder?: string;
  isMultiple?: boolean;
  isClearable?: boolean;
  isSearchable?: boolean;
  isDisabled?: boolean;
  loading?: boolean;
  menuIsOpen?: boolean;
  searchInputPlaceholder?: string;
  noOptionsMessage?: string;
}

interface SelectOneProps extends SelectProps {
  keyFilter: string;
  options: IFilter[];
}

interface IOption {
  disabled: boolean;
  isSelected: boolean;
  label: string;
  value: string;
}

const SelectOne = ({ keyFilter, options, ...props }: SelectOneProps) => {
  const router = useRouter();
  const [value, setValue] = useState<IOption | null>(null);
  const filter: { [key: string]: string } = {};
  const handleChange = (value: any) => {
    setValue(value);
    filter[keyFilter] = value.value;
    router.push({
      href: PATH.filter,
      query: { ...router.query, ...filter },
    });
  };
  return <Select options={options} value={value} onChange={handleChange} {...props} />;
};

export default SelectOne;
