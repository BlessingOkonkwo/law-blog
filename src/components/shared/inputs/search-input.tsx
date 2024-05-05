"use client";
import { FC, useState } from "react";
import { SearchInputIcon } from "@/components/shared/icons/search-input-icon";
import { Input } from "./input";
import { Controller, useFormContext } from "react-hook-form";
import { ICustomInputProps } from "@/components/types";
import InputErrorMessage from "../feedback/input-error-message";
import Button from "../controls/button";

const SearchInput: FC<ICustomInputProps> = ({
  name,
  label,
  error,
  placeholder,
  //   onChange,
  className,
  //   value,
  ...props
}) => {
  const { control } = useFormContext();
  const [isFocus, setIsFocus] = useState<boolean>(false);
  return (
    <Controller
      name={name!}
      control={control}
      render={({ field: { value, name, onChange } }) => (
        <>
          <div className="flex items-center gap-2">
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
            <div>
              <Button className="h-full" type="submit" size="sm">
                Search
              </Button>
            </div>
          </div>
          <InputErrorMessage name={`${name}`} />
        </>
      )}
    />
  );
};

export default SearchInput;
