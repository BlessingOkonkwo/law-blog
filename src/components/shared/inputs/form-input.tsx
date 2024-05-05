import { FC, useState } from "react";
import InputErrorMessage from "../feedback/input-error-message";
import { Controller, useFormContext } from "react-hook-form";
import { ICustomInputProps } from "@/components/types";
import Hidden from "@/components/shared/data-display/hidden";
import { cn } from "@/lib/utils";
import { Input } from "./input";
import Label from "./label";
import { FieldSet } from "./fieldset";

const FormInput: FC<ICustomInputProps> = ({
  name,
  label,
  error,
  placeholder,
  prefixIcon,
  suffixIcon,
  className,
  ...props
}) => {
  const { control } = useFormContext();
  const [isFocus, setIsFocus] = useState<boolean>(false);
  console.log(isFocus);
  return (
    <Controller
      name={name!}
      control={control}
      render={({ field: { value, name, onChange } }) => (
        <FieldSet>
          <Label>{label}</Label>
          <div className="w-full space-y-[4px]">
            <div className="relative w-full">
              <Input
                name={name}
                value={value}
                onChange={onChange}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                variant={error ? "error" : "default"}
                placeholder={placeholder ?? "Type here"}
                className={cn(prefixIcon ? "pl-[34px]" : "pl-3", className)}
                {...props}
              />
              {/* prefix Icon */}
              <Hidden visible={!!prefixIcon}>
                <span className="absolute top-[15px] left-[12px]">
                  {prefixIcon}
                </span>
              </Hidden>
              {/* suffix Icon */}
              <Hidden visible={!!suffixIcon}>
                <span className="absolute top-[15px] right-[12px]">
                  {suffixIcon}
                </span>
              </Hidden>
            </div>
            <InputErrorMessage name={`${name}`} />
          </div>
        </FieldSet>
      )}
    />
  );
};

export default FormInput;
