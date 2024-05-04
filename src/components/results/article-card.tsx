interface IProps {
  title: string;
  description: string;
}

const ArticleCard = ({ title, description }: IProps) => {
  return (
    <div className="bg-white p-4 rounded-lg border border-[#818181] max-w-[400px] h-[400px] overflow-hidden text-ellipsis">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="">{description}</p>
    </div>
  );
};

export default ArticleCard;
