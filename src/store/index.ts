import { configureStore, createSlice } from "@reduxjs/toolkit";

import { ChapterProps } from "../components/Chapter";
import ArrayChapter from "./Array";

interface LearnStore {
  id: string;
  chapters: ChapterProps[];
  currentChapter: number;
}

const learnStore = createSlice({
  name: "learnBase",
  initialState: {
    id: "Lodash",
    chapters: [ArrayChapter],
    currentChapter: 0,
  } as LearnStore,
  reducers: {
    changeCurrentChapter: (state, action) => {
      console.log(action);
    },
  },
});

const store = configureStore({
  reducer: {
    learnStore: learnStore.reducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
