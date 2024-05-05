/* eslint-disable no-param-reassign */
import { IArticleData, IUser } from "@/components/types";
import { createSlice } from "@reduxjs/toolkit";

export interface IArticle {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface IArticleSlice {
  articles: IArticle[];
  users: IUser[];
  articlesData: IArticleData[];
}

const initialState: IArticleSlice = {
  articles: [],
  users: [],
  articlesData: [],
};

export const articleSlice = createSlice({
  name: "articlesDetails",
  initialState,
  reducers: {
    setArticles: (state, action) => {
      state.articles = action.payload;
    },
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setArticlesData: (state, action) => {
      state.articlesData = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setArticles,
  setUsers,
  setArticlesData
} = articleSlice.actions;

export default articleSlice.reducer;
