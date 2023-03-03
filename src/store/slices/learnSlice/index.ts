import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChapterProps } from "@src/components/Chapter";

import ArrayChapter from "./Array";
import CollectionChapter from "./Collection";
import Date from "./Date";
import Function from "./Function";
import LangChapter from "./Lang";

interface LearnStore {
  id: string;
  chapters: ChapterProps[];
  currentChapter: number;
}

const initialState = {
  id: "Lodash",
  chapters: [
    // ArrayChapter,
    // CollectionChapter,
    // Date,
    // Function,
    LangChapter,
  ],
  currentChapter: 0,
} as LearnStore;

const learnSlice = createSlice({
  name: "learnBase",
  initialState,
  reducers: {
    changeCurrentChapter: (state, { payload }: PayloadAction<number>) => {
      state.currentChapter = payload;
    },
  },
});

export default learnSlice;
