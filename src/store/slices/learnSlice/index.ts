import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChapterProps } from "@src/components/Chapter";

import ArrayChapter from "./Array";
import CollectionChapter from "./Collection";
import Date from "./Date";
import Function from "./Function";

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
    Function,
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
