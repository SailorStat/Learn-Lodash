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

const CollectionRules: RuleProps[] = [countBy, every, filter, find, findLast, flatMap, flatMapDeep, flatMapDepth];

const CollectionChapter: ChapterProps = {
  id: "chapter-collection",
  title: "Collection",
  rules: CollectionRules,
};

export default CollectionChapter;
