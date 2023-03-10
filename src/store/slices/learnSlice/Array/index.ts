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
import indexOfLastIndexOf from "./indexOfLastIndexOf";
import initial from "./initial";
import intersection from "./intersection";
import intersectionBy from "./intersectionBy";
import intersectionWith from "./intersectionWith";
import join from "./join";
import last from "./last";
import nth from "./nth";
import pullAll from "./pullAll";
import pullAllBy from "./pullAllBy";
import pullAllWith from "./pullAllWith";
import pullAt from "./pullAt";
import pullRemove from "./pullRemove";
import reverse from "./reverse";
import slice from "./slice";
import sortedIndex from "./sortedIndex";
import sortedIndexBy from "./sortedIndexBy";
import sortedIndexOf from "./sortedIndexOf";
import sortedLastIndex from "./sortedLastIndex";
import sortedLastIndexBy from "./sortedLastIndexBy";
import sortedLastIndexOf from "./sortedLastIndexOf";
import sortedUniq from "./sortedUniq";
import sortedUniqBy from "./sortedUniqBy";
import tail from "./tail";
import take from "./take";
import takeRight from "./takeRight";
import takeRightWhile from "./takeRightWhile";
import takeWhile from "./takeWhile";
import union from "./union";
import unionBy from "./unionBy";
import unionWith from "./unionWith";
import uniq from "./uniq";
import uniqBy from "./uniqBy";
import uniqWith from "./uniqWith";
import without from "./without";
import xor from "./xor";
import xorBy from "./xorBy";
import xorWith from "./xorWith";
import zipObject from "./zipObject";
import zipObjectDeep from "./zipObjectDeep";
import zipUnzip from "./zipUnzip";
import zipWithUnzipWith from "./zipWithUnzipWith";

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
  indexOfLastIndexOf,
  initial,
  intersection,
  intersectionBy,
  intersectionWith,
  join,
  last,
  nth,
  pullRemove,
  pullAll,
  pullAllBy,
  pullAllWith,
  pullAt,
  reverse,
  slice,
  sortedIndex,
  sortedIndexBy,
  sortedIndexOf,
  sortedLastIndex,
  sortedLastIndexBy,
  sortedLastIndexOf,
  sortedUniq,
  sortedUniqBy,
  tail,
  take,
  takeRight,
  takeRightWhile,
  takeWhile,
  union,
  unionBy,
  unionWith,
  uniq,
  uniqBy,
  uniqWith,
  without,
  xor,
  xorBy,
  xorWith,
  zipUnzip,
  zipObject,
  zipObjectDeep,
  zipWithUnzipWith,
];

const ArrayChapter: ChapterProps = {
  id: "chapter-array",
  title: "Array",
  rules: ArrayRules,
};

export default ArrayChapter;
