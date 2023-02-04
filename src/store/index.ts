import { ChapterProps } from "../components/Chapter";
import ArrayChapter from "./Array";

interface LearnStore {
  id: string;
  chapters: ChapterProps[];
}

export const learnStore: LearnStore = {
  id: "Lodash",
  chapters: [ArrayChapter],
};

export default learnStore;
