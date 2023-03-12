import { ChapterProps } from "@src/components/Chapter";
import { RuleProps } from "@src/components/Rule";

import add from "./add";
import ceil from "./ceil";
import divide from "./divide";
import floor from "./floor";
import max from "./max";
import maxBy from "./maxBy";
import mean from "./mean";
import meanBy from "./meanBy";
import min from "./min";
import minBy from "./minBy";
import multiply from "./multiply";
import round from "./round";
import subtract from "./subtract";
import sum from "./sum";
import sumBy from "./sumBy";

const MathRules: RuleProps[] = [
  add,
  ceil,
  divide,
  floor,
  max,
  maxBy,
  mean,
  meanBy,
  min,
  minBy,
  multiply,
  round,
  subtract,
  sum,
  sumBy,
];

const MathChapter: ChapterProps = {
  id: "chapter-math",
  title: "Math",
  rules: MathRules,
};

export default MathChapter;
