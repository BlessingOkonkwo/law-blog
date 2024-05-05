import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import SearchInput from "../shared/inputs/search-input";
import Button from "../shared/controls/button";
import PlusIcon from "../shared/icons/plus-icon";
import { useNavigate } from "react-router-dom";

interface ISearchArticlePayload {
  articleTitle: string;
}

const searchArticleFormSchema = Yup.object().shape({
  articleTitle: Yup.string().required(
    "Please enter a title or author to search for"
  ),
});

const TopSection = () => {
  const navigate = useNavigate();
  const defaultValues = {
    articleTitle: "",
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
    
  };
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full my-4">
      <div className="w-full">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className="">
            <SearchInput
              name="articleTitle"
              placeholder="Search by article title or author"
              error={errors["articleTitle"]}
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
