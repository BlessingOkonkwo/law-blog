import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import SearchInput from "../shared/inputs/search-input";
import Button from "../shared/controls/button";
import SearchIcon from "../shared/icons/search-icon";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

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

const TopSection = ({ setQuery }: IProps) => {
  const [searchParams, setSearchParams] = useSearchParams();

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
    reset,
  } = methods;

  const id = searchParams.get("search");
  useEffect(() => {
    if (id === null) {
      reset();
    }
  }, [id]);

  const onSubmit: SubmitHandler<ISearchArticlePayload> = (data) => {
    console.log("DATA TO SUBMIT: ", data);
    setQuery(data.searchValue);
    setSearchParams(`search=${data.searchValue}`);
  };
  return (
    <div className="w-full">
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex items-center gap-2"
        >
          <SearchInput
            name="searchValue"
            placeholder="Search by article title or author"
            error={errors["searchValue"]}
            className="w-[200px]"
          />
          <div>
            <Button className="h-full !px-3" type="submit" size="sm">
              <SearchIcon />
            </Button>
          </div>
        </form>
      </FormProvider>
      {/* <Button size="sm" className="!p-1" onClick={() => setQuery("")}>
        <RefreshIcon />
      </Button> */}
    </div>
  );
};

export default TopSection;
