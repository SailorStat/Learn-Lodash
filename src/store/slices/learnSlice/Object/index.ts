import { ChapterProps } from "@src/components/Chapter";
import { RuleProps } from "@src/components/Rule";

import assign from "./assign";
import assignIn from "./assignIn";
import assignInWith from "./assignInWith";
import assignWith from "./assignWith";
import at from "./at";
import create from "./create";
import defaults from "./defaults";
import defaultsDeep from "./defaultsDeep";

const ObjectRules: RuleProps[] = [assign, assignIn, assignInWith, assignWith, at, create, defaults, defaultsDeep];

const ObjectChapter: ChapterProps = {
  id: "chapter-object",
  title: "Object",
  rules: ObjectRules,
};

export default ObjectChapter;
