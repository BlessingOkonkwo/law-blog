/* eslint-disable @typescript-eslint/no-unused-expressions */
import * as React from "react";
import { cn } from "@/lib/utils";
import Loader from "../feedback/loader";

const classes = {
  base: "flex justify-center items-center space-x-[10px] py-2 px-4 whitespace-nowrap border rounded-md shadow-sm text-sm font-[500] focus:outline-none focus:ring-2 focus:ring-offset-1 select-none cursor-pointer motion-safe:transition-colors disabled:cursor-not-allowed",
  fullWidth: "w-full",
  size: {
    xs: "py-2 px-4 text-xs",
    sm: "py-2 px-6 text-sm",
    md: "py-3 px-8 text-base",
    lg: "py-3 px-10 text-lg",
    xl: "py-3 px-12 text-xl",
    "2xl": "py-[20px] px-[40px] text-2xl",
  },
  variant: {
    primary:
      "bg-[#5D51C6] text-[#F8EEE8] hover:bg-[#6657e6] disabled:opacity-50 text-white border-transparent focus:ring-[#F8EEE8]",
    secondary:
      "bg-[#EBEBF2] text-[#8E8AB5] hover:bg-secondary50 focus:ring-secondaryText disabled:bg-gray-100",
    transparent:
      "bg-transparent text-[#5d51c6] border-[1px] border-[#d8d8fb] focus:ring-[#d8d8fb] hover:bg-white hover:text-[#221b62] disabled:bg-gray-100",
  },
};

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fullwidth?: boolean;
  variant?: "primary" | "transparent";
  className?: string;
  type?: "button" | "reset" | "submit";
  disabled?: boolean;
  loading?: boolean;
  loadingText?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  onClick?: (
    event: React.MouseEvent | React.KeyboardEvent | React.TouchEvent
  ) => void;
}

const Button = ({
  disabled,
  fullwidth,
  variant,
  className,
  type,
  loading,
  loadingText,
  children,
  onClick,
  size,
  ...props
}: IButtonProps) => {
  /** Whenever button is clicked and button is neither loading nor disabled,
   * this function calls the
   * props.onClick function passing the click event as an argument
   *
   * The props.onClick event can be any function
   */
  const handleClick = (
    event: React.MouseEvent | React.KeyboardEvent | React.TouchEvent
  ): void => {
    !disabled && !loading && onClick && onClick(event);
  };
  return (
    <button
      {...props}
      // eslint-disable-next-line react/button-has-type
      type={type ?? "button"}
      disabled={disabled}
      onClick={handleClick}
      className={cn(
        classes.base,
        className,
        classes.variant[variant ?? "primary"],
        fullwidth && classes.fullWidth,
        loading && "cursor-not-allowed",
        classes.size[size ?? "md"]
      )}
    >
      {loading && <Loader />}
      {loading && loadingText && loadingText}
      {!loading && children}
    </button>
  );
};
export default Button;
