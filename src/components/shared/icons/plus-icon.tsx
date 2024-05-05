import { IIconProps } from "@/components/types";

const PlusIcon = ({ width, height, color, ...props }: IIconProps) => {
  return (
    <svg
      width={width ?? "14"}
      height={height ?? "15"}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.00033 1.66602V13.3327M1.16699 7.49935H12.8337"
        stroke={color ?? "#6657E6"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PlusIcon;
