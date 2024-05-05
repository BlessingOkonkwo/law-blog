import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const Label = ({ children }: IProps) => {
  return <label className="text-base font-medium">{children}</label>;
};

export default Label;
