import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import FormInput from "../shared/inputs/form-input";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ArticleDescriptionInput from "../shared/inputs/article-description-input";

interface ICreateArticlePayload {
  articleTitle: string;
  articleDescription: string;
  authorName: string;
}

const createArticleFormSchema = Yup.object().shape({
  articleTitle: Yup.string().required("Please enter a title for the article"),
  articleDescription: Yup.string().required("Ariticle description is required"),
  authorName: Yup.string().required("Attorney name is required"),
});

const CreateArticleForm = () => {
  const defaultValues = {
    articleTitle: "",
    articleDescription: "",
    authorName: "",
  };

  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(createArticleFormSchema),
    reValidateMode: "onChange",
    delayError: 2000,
    defaultValues: defaultValues,
  });

  const {
    handleSubmit,
    formState: { errors, isDirty },
  } = methods;

  const onSubmit: SubmitHandler<ICreateArticlePayload> = (data) => {
    console.log("DATA TO SUBMIT: ", data);
  };
  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-[675px] rounded-lg border bg-white px-6 py-4">
          <FormInput
            label="Attorney Name"
            name="authorName"
            error={errors["authorName"]}
            placeholder="Please enter your name"
          />

          <FormInput
            label="Article Title"
            name="articleTitle"
            error={errors["articleTitle"]}
            placeholder="Please enter article title"
          />

          <ArticleDescriptionInput
            label="Article Description"
            name="articleDescription"
            error={errors["articleDescription"]}
            placeholder="Type your law article snippet here"
          />

          <div>
            <button type="submit">submit</button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default CreateArticleForm;
