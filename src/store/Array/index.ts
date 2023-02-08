import { ChapterProps } from "@src/components/Chapter";
import { RuleProps } from "@src/components/Rule";

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
import findIndex from "./findIndex";
import findLastIndex from "./findLastIndex";
import flatten from "./flatten";
import flattenDeep from "./flattenDeep";
import flattenDepth from "./flattenDepth";
import fromPairsToPairs from "./fromPairsToPairs";

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
  findIndex,
  findLastIndex,
  flatten,
  flattenDeep,
  flattenDepth,
  fromPairsToPairs,
];

const ArrayChapter: ChapterProps = {
  id: "chapter-array",
  title: "Array",
  rules: ArrayRules,
};

export default ArrayChapter;
