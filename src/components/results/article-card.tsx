import capitalizeFirstLetter from '@/lib/helpers/capitalizeFirstLettre';

interface IProps {
  title: string;
  description: string;
  author: string;
  query: string;
}

const ArticleCard = ({ title, description, author, query }: IProps) => {

  const highlightText = (text: string, valueToHighlight: string) => {
    const regex = new RegExp(valueToHighlight, 'gi'); // Case-insensitive global search
    return text.replace(regex, (match) => `<span  class="text-[#6657E5] bg-[#eae7f8]">${match}</span>`);
  };

  const highlightedName = highlightText(author, query);
  const highlightedTitle = highlightText(title, query);
  const highlightedDescription = highlightText(capitalizeFirstLetter(description), query);

  return (
    <div className="flex flex-col space-y-3 bg-white p-4 rounded-lg border shadow max-w-[350px] h-[250px]">
      <h5 className='text-[#8E8AB5] font-semibold' dangerouslySetInnerHTML={{ __html: `<span class="text-[#8E8AB5] font-normal">Author: </span>` + highlightedName }}></h5>
      <h3 className="text-lg font-semibold capitalize text-[#252c33]" dangerouslySetInnerHTML={{ __html: highlightedTitle }}></h3>
      <p className="max-h-[150p] overflow-hidden text-ellipsis text-justify line-clamp-5 text-sm text-[#756D82]" dangerouslySetInnerHTML={{ __html: highlightedDescription }}>
      </p>
    </div>
  );
};

export default ArticleCard;