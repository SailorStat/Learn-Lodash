import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChapterProps } from "@src/components/Chapter";

import ArrayChapter from "./Array";
import CollectionChapter from "./Collection";
import DateChapter from "./Date";
import FunctionChapter from "./Function";
import LangChapter from "./Lang";
import MathChapter from "./Math";
import NumberChapter from "./Number";
import ObjectChapter from "./Object";

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
    // DateChapter,
    // FunctionChapter,
    // LangChapter,
    // MathChapter,
    // NumberChapter,
    ObjectChapter,
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
