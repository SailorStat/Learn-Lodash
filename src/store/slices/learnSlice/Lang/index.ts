import { ChapterProps } from "@src/components/Chapter";
import { RuleProps } from "@src/components/Rule";

import castArray from "./castArray";
import clone from "./clone";
import cloneDeep from "./cloneDeep";

const LangRules: RuleProps[] = [castArray, clone, cloneDeep];

const LangChapter: ChapterProps = {
  id: "lang-date",
  title: "Lang",
  rules: LangRules,
};

export default LangChapter;
