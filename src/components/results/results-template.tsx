// import useGetArticles from "@/api/services/useGetArticles";
import ArticleCard from "@/components/results/article-card";
import TopSection from "@/components/results/top-section";
import Error from "@/components/shared/error";
import Loading from "@/components/shared/loading";
import { useGetArticlesQuery } from "@/redux/services/get-articles.api-slice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import {
  setArticles,
  setArticlesData,
  setUsers,
} from "@/redux/slices/article-slice";
import { useEffect } from "react";
import { useGetUsersQuery } from "@/redux/services/user.api-slice";
import mergeAttorneyArticles from "@/lib/helpers/mergeAttorneyArticles";

const ResultsTemplate = () => {
  const dispatch = useDispatch();
  // const [articlesData, setArticlesData] = useState<IArticleData[]>([]);
  //   const { data, loading, error } = useGetArticles();
  const { data, isLoading, isSuccess, isError } = useGetArticlesQuery();
  const { data: usersData } = useGetUsersQuery();
  console.log("rtk data: ", data);

  const { articles, users, articlesData } = useSelector(
    (state: RootState) => state.article
  );

  useEffect(() => {
    dispatch(setArticles(data));
    dispatch(setUsers(usersData));
    dispatch(setArticlesData(mergeAttorneyArticles(articles, users)));
  }, []);

  console.log(articlesData);
  console.log(articles);
  console.log(users);

  return (
    <div className="h-full">
      <TopSection />
      <div className="h-full flex flex-wrap justify-center gap-2">
        {isLoading && <Loading />}

        {!isLoading &&
          isSuccess &&
          articlesData &&
          articlesData.length > 0 &&
          articlesData.map((post, index) => (
            <ArticleCard
              key={index}
              title={post.title}
              description={post.body}
              author={post.name}
            />
          ))}
        {!isLoading && isError && <Error />}
      </div>
    </div>
  );
};

export default ResultsTemplate;
