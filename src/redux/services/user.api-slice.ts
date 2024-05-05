import { baseApiSlice } from "@/redux/api/base-api";
import { IArticle, IUser } from "@/components/types";

export interface IArticlePayload {
  title: string;
  body: string;
}

export const usersApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<IUser[], void>({
      query: () => ({
        url: `users`,
        method: "GET",
      }),
    }),
    addUser: builder.mutation<IArticle, IArticlePayload>({
      query: (body) => ({
        url: `users`,
        method: "POST",
        body: body,
      }),
    }),
  }),
});

export const { useGetUsersQuery, useAddUserMutation } = usersApiSlice;
