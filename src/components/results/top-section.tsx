import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import SearchInput from "../shared/inputs/search-input";
import Button from "../shared/controls/button";
import PlusIcon from "../shared/icons/plus-icon";
import { useNavigate } from "react-router-dom";

interface IProps {
  query: string;
  setQuery: (value: string) => void;
}
interface ISearchArticlePayload {
  searchValue: string;
}

const searchArticleFormSchema = Yup.object().shape({
  searchValue: Yup.string().required(
    "Please enter a title or author to search for"
  ),
});

const TopSection = ({setQuery}: IProps) => {
  const navigate = useNavigate();
  const defaultValues = {
    searchValue: "",
  };

  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(searchArticleFormSchema),
    reValidateMode: "onChange",
    delayError: 2000,
    defaultValues: defaultValues,
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<ISearchArticlePayload> = (data) => {
    console.log("DATA TO SUBMIT: ", data);
    setQuery(data.searchValue);
  };
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full my-4">
      <div className="w-full">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className="">
            <SearchInput
              name="searchValue"
              placeholder="Search by article title or author"
              error={errors["searchValue"]}
            />
          </form>
        </FormProvider>
      </div>

      <div className="self-end">
        <Button
          className="flex items-center gap-2"
          onClick={() => navigate("/create-article")}
        >
          <PlusIcon color="white" /> Create New
        </Button>
      </div>
    </div>
  );
};

export default TopSection;
