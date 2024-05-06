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
import { useEffect, useState } from "react";
import { useGetUsersQuery } from "@/redux/services/user.api-slice";
import mergeAttorneyArticles from "@/lib/helpers/mergeAttorneyArticles";

const ResultsTemplate = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState<string>("");
  //   const { data, loading, error } = useGetArticles();
  const { data, isLoading, isSuccess, isError } = useGetArticlesQuery();
  const { data: usersData } = useGetUsersQuery();

  const { articles, users, articlesData } = useSelector(
    (state: RootState) => state.article
  );

  useEffect(() => {
    if (data && usersData && data.length > 0 && usersData?.length > 0) {
      dispatch(setArticles(data));
      dispatch(setUsers(usersData));
      dispatch(setArticlesData(mergeAttorneyArticles(articles, users, query)));
    }
    if (data && data.length > 0) {
      setArticlesData(["data"]);
    }
  }, [data, usersData, articles, users, query]);

  return (
    <div className="h-full flex flex-col items-center space-y-4 mx-auto">
      <TopSection query={query} setQuery={setQuery} />
      <div className="h-full flex flex-wrap justify-center gap-2">
        {isLoading && <Loading />}

        {!isLoading &&
          isSuccess &&
          articlesData.map((post, index) => (
            <ArticleCard
              key={index}
              title={post.title}
              description={post.body}
              author={post.name}
              query={query}
            />
          ))}
        {!isLoading && isError && <Error />}
      </div>
    </div>
  );
};

export default ResultsTemplate;
