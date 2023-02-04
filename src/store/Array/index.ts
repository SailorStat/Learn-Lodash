import { ChapterProps } from "../../components/Chapter";
import { RuleProps } from "../../components/Rule";
import chunk from "./chunk";
import compact from "./compact";
import concat from "./concat";
import difference from "./difference";
import differenceBy from "./differenceBy";
import differenceWith from "./differenceWith";
import drop from "./drop";
import dropRight from "./dropRight";
import dropRightWhile from "./dropRightWhile";
import dropWhile from "./dropWhile";
import fill from "./fill";

const ArrayRules: RuleProps[] = [
  chunk,
  compact,
  concat,
  difference,
  differenceBy,
  differenceWith,
  drop,
  dropRight,
  dropRightWhile,
  dropWhile,
  fill,
];

const ArrayChapter: ChapterProps = {
  id: "chapter-array",
  title: "Array",
  rules: ArrayRules,
};

export default ArrayChapter;
