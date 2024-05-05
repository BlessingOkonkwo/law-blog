import CreateArticleForm from "@/components/create-article/create-article-form";
import PageWrapper from "@/components/shared/data-display/page-wrapper";

const CreateArticle = () => {
  return (
    <PageWrapper pageTitle="Post Article">
      <CreateArticleForm />
    </PageWrapper>
  );
};

export default CreateArticle;
