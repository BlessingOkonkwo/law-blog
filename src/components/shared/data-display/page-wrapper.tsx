import { ReactNode } from "react";
import ArrowLeftIcon from "../icons/arrow-left-icon";
import { useNavigate } from "react-router-dom";

interface IProps {
  pageTitle: string;
  children: ReactNode;
}

const PageWrapper = ({ pageTitle, children }: IProps) => {
  const navigate = useNavigate();
  return (
    <div className="space-y-5">
      <div className="flex items-center gap-2">
        <span
          className="cursor-pointer hover:bg-slate-200 p-2"
          onClick={() => {
            navigate("/");
          }}
        >
          <ArrowLeftIcon />
        </span>
        <h1 className="font-bold text-4xl text-black">{pageTitle}</h1>
      </div>

      {children}
    </div>
  );
};

export default PageWrapper;
