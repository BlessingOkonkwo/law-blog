import { baseApiSlice } from "@/redux/api/base-api";
import { IArticle } from "@/components/types";

export interface IArticlePayload {
  title: string;
  body: string;
}

export const articlesApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getArticles: builder.query<IArticle[], void>({
      query: () => ({
        url: `posts`,
        method: "GET",
      }),
    }),
    addArticle: builder.mutation<IArticle, IArticlePayload>({
      query: (body) => ({
        url: `posts`,
        method: "POST",
        body: body,
      }),
    }),
  }),
});

export const { useGetArticlesQuery, useAddArticleMutation } = articlesApiSlice;
