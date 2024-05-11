import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import FormInput from "../shared/inputs/form-input";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ArticleDescriptionInput from "../shared/inputs/article-description-input";
import EmailInput from "../shared/inputs/email-input";
import Button from "../shared/controls/button";
import { useAddArticleMutation } from "@/redux/services/get-articles.api-slice";
import { useState } from "react";
import SuccessDialog from "./success-dialog";
import ErrorDialog from "./error-dialog";

interface ICreateArticlePayload {
  articleTitle: string;
  articleDescription: string;
  authorName: string;
}

const createArticleFormSchema = Yup.object().shape({
  articleTitle: Yup.string().required("Please enter a title for the article"),
  articleDescription: Yup.string().required("Article description is required"),
  authorName: Yup.string().required("Attorney name is required"),
  email: Yup.string()
    .email("Email must be a valid email address")
    .required("Please enter your email address"),
});

const CreateArticleForm = () => {
  const [successModal, setSuccessModal] = useState<boolean>(false);
  const [errorModal, setErrorModal] = useState<boolean>(false);

  const defaultValues = {
    articleTitle: "",
    articleDescription: "",
    authorName: "",
    email: "",
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
    formState: { errors },
    reset,
  } = methods;

  const [addArticle, { isLoading }] = useAddArticleMutation();

  const onSubmit: SubmitHandler<ICreateArticlePayload> = (data) => {
    console.log("DATA TO SUBMIT: ", data);
    addArticle({
      title: data.articleTitle,
      body: data.articleDescription,
    })
      .unwrap()
      .then((res) => {
        console.log("Post added successfully");
        console.log(res);
        reset();
        setSuccessModal(true);
      })
      .catch((error) => {
        console.log("Error: ", error);
        setErrorModal(true);
      });
  };
  return (
    <div>
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 max-w-[675px] rounded-lg border bg-white px-6 py-4"
        >
          <FormInput
            aria-label="author-name"
            label="Attorney Name"
            name="authorName"
            error={errors["authorName"]}
            placeholder="Please enter your name"
          />

          <EmailInput
            aria-label="author-email"
            label="Email address"
            name="email"
            error={errors["email"]}
          />

          <FormInput
            aria-label="article-title"
            label="Article Title"
            name="articleTitle"
            error={errors["articleTitle"]}
            placeholder="Please enter article title"
          />

          <ArticleDescriptionInput
            aria-label="article-description"
            label="Article Description"
            name="articleDescription"
            error={errors["articleDescription"]}
            placeholder="Type your law article snippet here"
          />

          <div>
            <Button
              variant="primary"
              type="submit"
              loading={isLoading}
              loadingText="Processing..."
            >
              Submit
            </Button>
          </div>
        </form>
      </FormProvider>

      <SuccessDialog
        openModal={successModal}
        closeModal={() => setSuccessModal(false)}
      />
      <ErrorDialog
        openModal={errorModal}
        closeModal={() => setErrorModal(false)}
      />
    </div>
  );
};

export default CreateArticleForm;
