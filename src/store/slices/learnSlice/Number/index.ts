import { ChapterProps } from "@src/components/Chapter";
import { RuleProps } from "@src/components/Rule";

import clamp from "./clamp";
import inRange from "./inRange";
import random from "./random";

const NumberRules: RuleProps[] = [clamp, inRange, random];

const NumberChapter: ChapterProps = {
  id: "chapter-number",
  title: "Number",
  rules: NumberRules,
};

export default NumberChapter;
