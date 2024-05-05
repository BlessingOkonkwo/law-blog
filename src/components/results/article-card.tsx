import capitalizeFirstLetter from "@/lib/helpers/capitalizeFirstLettre";

interface IProps {
  title: string;
  description: string;
}

const ArticleCard = ({ title, description }: IProps) => {
  return (
    <div className="flex flex-col space-y-3 bg-white p-4 rounded-lg border shadow max-w-[350px] h-[250px]">
      <h3 className="text-xl font-semibold capitalize">{title}</h3>
      <p className="max-h-[150p] overflow-hidden text-ellipsis text-justify line-clamp-5">
        {capitalizeFirstLetter(description)}.
      </p>
    </div>

    // <div className="bg-white w-[350px] desktop:w-[370px] lgDesktops:w-[383px] h-[200px] flex flex-col justify-between py-[24px] px-[20px] border-[2.5px] border-[#d8d8fb] rounded-[16px] shadow-[0px_12px_25px_rgba(3,_47,_60,_0.07)]">
    //   {/* Card Title and Description */}
    //   <div className="w-full flex">
    //     {/* Card Icon */}
    //     <div>{/* <UsedApiCredIcon /> */}</div>
    //     {/* Card Icon End */}
    //     <div className="max-w-[267px] space-y-[8px]">
    //       <h3>{title}</h3>
    //       <p className="capitalize text-xs !text-[#756D82] max-h-[70px] text-ellipsis overflow-hidden line-clamp-3">
    //         {description}
    //       </p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ArticleCard;
