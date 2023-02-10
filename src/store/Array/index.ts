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
import head from "./head";
import indexOfIndexLastOf from "./indexOfIndexLastOf";
import initial from "./initial";
import intersection from "./intersection";
import intersectionBy from "./intersectionBy";
import intersectionWith from "./intersectionWith";
import join from "./join";
import last from "./last";
import nth from "./nth";
import pullRemove from "./pullRemove";

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
  head,
  indexOfIndexLastOf,
  initial,
  intersection,
  intersectionBy,
  intersectionWith,
  join,
  last,
  nth,
  pullRemove,
];

const ArrayChapter: ChapterProps = {
  id: "chapter-array",
  title: "Array",
  rules: ArrayRules,
};

export default ArrayChapter;
