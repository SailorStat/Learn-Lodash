import { ChapterProps } from "@src/components/Chapter";
import { RuleProps } from "@src/components/Rule";

import countBy from "./countBy";
import every from "./every";
import filter from "./filter";
import find from "./find";
import findLast from "./findLast";
import flatMap from "./flatMap";
import flatMapDeep from "./flatMapDeep";
import flatMapDepth from "./flatMapDepth";
import forEach from "./forEach";
import forEachRight from "./forEachRight";
import groupBy from "./groupBy";
import includes from "./includes";
import invokeMap from "./invokeMap";
import keyBy from "./keyBy";
import map from "./map";

const CollectionRules: RuleProps[] = [
  countBy,
  every,
  filter,
  find,
  findLast,
  flatMap,
  flatMapDeep,
  flatMapDepth,
  forEach,
  forEachRight,
  groupBy,
  includes,
  invokeMap,
  keyBy,
  map,
];

const CollectionChapter: ChapterProps = {
  id: "chapter-collection",
  title: "Collection",
  rules: CollectionRules,
};

export default CollectionChapter;
