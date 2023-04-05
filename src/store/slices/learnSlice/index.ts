import {
  createSlice,
  // PayloadAction
} from "@reduxjs/toolkit";
import { ChapterProps } from "@src/components/Chapter";

import ArrayChapter from "./Array";
import CollectionChapter from "./Collection";
import DateChapter from "./Date";
import FunctionChapter from "./Function";
import LangChapter from "./Lang";
import MathChapter from "./Math";
import NumberChapter from "./Number";
import ObjectChapter from "./Object";
import SeqChapter from "./Seq";
import StringChapter from "./String";
import UtilChapter from "./Util";

interface LearnStore {
  id: string;
  chapters: ChapterProps[];
  currentChapter: string;
}

const initialState = {
  id: "Lodash",
  chapters: [
    ArrayChapter,
    CollectionChapter,
    DateChapter,
    FunctionChapter,
    LangChapter,
    MathChapter,
    NumberChapter,
    ObjectChapter,
    SeqChapter,
    StringChapter,
    UtilChapter,
  ],
  // currentChapter: "",
} as LearnStore;

const learnSlice = createSlice({
  name: "learnBase",
  initialState,
  reducers: {
    // changeCurrentChapter: (state, { payload }: PayloadAction<string>) => {
    //   state.currentChapter = payload;
    // },
  },
});

export default learnSlice;
