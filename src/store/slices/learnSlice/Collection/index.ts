import { ChapterProps } from "@src/components/Chapter";
import { RuleProps } from "@src/components/Rule";

import countBy from "./countBy";
import every from "./every";

const CollectionRules: RuleProps[] = [countBy, every];

const CollectionChapter: ChapterProps = {
  id: "chapter-collection",
  title: "Collection",
  rules: CollectionRules,
};

export default CollectionChapter;
