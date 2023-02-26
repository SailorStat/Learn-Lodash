import { ChapterProps } from "@src/components/Chapter";
import { RuleProps } from "@src/components/Rule";

import now from "./now";

const DateRules: RuleProps[] = [now];

const DateChapter: ChapterProps = {
  id: "chapter-date",
  title: "Date",
  rules: DateRules,
};

export default DateChapter;
