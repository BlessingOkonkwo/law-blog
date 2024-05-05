"use client";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IGlobalState {
  darkMode: boolean;
}

const initialState: IGlobalState = {
  darkMode: false,
};

export const globalStateSlice = createSlice({
  name: "globalState",
  initialState,
  reducers: {
    setDarkMode: (state, action: PayloadAction<boolean>) => {
      state.darkMode = action.payload;
      return state;
    },
  },
});

export const { setDarkMode } = globalStateSlice.actions;

export default globalStateSlice.reducer;
