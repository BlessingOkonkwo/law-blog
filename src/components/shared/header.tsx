import Button from "./controls/button";
import PlusIcon from "./icons/plus-icon";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white flex items-center justify-between z-50 min-h-[50px] py-2 px-4 fixed left-0 top-0 right-0 shadow rounded-[100px]">
      <div className="bg-white text-3xl text-[#6657e5] font-bold">
        Law Articles
      </div>

      <div className="self-end">
        <Button
          size="md"
          className="flex items-center gap-2 !py-2 !px-6 !text-sm md:!py-3 md:!px-8 md:!text-base"
          onClick={() => navigate("/create-article")}
        >
          <PlusIcon color="white" /> Create New
        </Button>
      </div>
    </div>
  );
};

export default Header;
