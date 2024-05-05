"use client";
import React, { FC, useState } from "react";
import { SearchInputIcon } from "@/components/shared/icons/search-input-icon";
import { Input } from "./input";

const SearchInput: FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  name,
  placeholder,
  onChange,
  value,
  ...props
}) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  return (
    <div className="relative w-full">
      <Input
        name={name}
        value={value}
        type="search"
        onChange={onChange}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        variant="default"
        placeholder={placeholder ?? "Search"}
        className="pl-[40px] h-[44px]"
        {...props}
      />
      {/* prefix Icon */}
      <span className="absolute top-[13px] left-[12px]">
        <SearchInputIcon focused={isFocus} />
      </span>
    </div>
  );
};

export default SearchInput;
