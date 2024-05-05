import { FC, useState } from "react";
import InputErrorMessage from "../feedback/input-error-message";
import { Controller, useFormContext } from "react-hook-form";
import { ICustomInputTextAreaProps } from "@/components/types";
import { cn } from "@/lib/utils";
import Label from "./label";
import { FieldSet } from "./fieldset";

const ArticleDescriptionInput: FC<ICustomInputTextAreaProps> = ({
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
  return (
    <Controller
      name={name!}
      control={control}
      render={({ field: { value, name, onChange } }) => (
        <FieldSet>
          <Label>{label}</Label>
          <div className="w-full space-y-[4px]">
            <div className="relative w-full">
              <textarea
                name={name}
                value={value}
                onChange={onChange}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                placeholder={placeholder ?? "Type here"}
                id={name}
                cols={30}
                rows={10}
                className={cn(className, "font-medium border rounded-lg outline-none p-4 w-full placeholder:text-[hsla(213,27%,84%,1)]")}
                {...props}
              ></textarea>
            </div>
            <InputErrorMessage name={`${name}`} />
          </div>
        </FieldSet>
      )}
    />
  );
};

export default ArticleDescriptionInput;
