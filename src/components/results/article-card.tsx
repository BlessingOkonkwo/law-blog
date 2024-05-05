import capitalizeFirstLetter from "@/lib/helpers/capitalizeFirstLettre";

interface IProps {
  title: string;
  description: string;
  author: string;
}

const ArticleCard = ({ title, description, author }: IProps) => {
  return (
    <div className="flex flex-col space-y-3 bg-white p-4 rounded-lg border shadow max-w-[350px] h-[250px]">
      <h5>{author}</h5>
      <h3 className="text-lg font-semibold capitalize text-[#252c33]">{title}</h3>
      <p className="max-h-[150p] overflow-hidden text-ellipsis text-justify line-clamp-5 text-sm text-[#756D82]">
        {capitalizeFirstLetter(description)}.
      </p>
    </div>
  );
};

export default ArticleCard;
