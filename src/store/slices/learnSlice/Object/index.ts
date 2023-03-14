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
import findKey from "./findKey";
import findLastKey from "./findLastKey";
import forIn from "./forIn";
import forInRight from "./forInRight";
import forOwn from "./forOwn";
import forOwnRight from "./forOwnRight";
import functions from "./functions";
import functionsIn from "./functionsIn";
import get from "./get";
import has from "./has";
import hasIn from "./hasIn";
import invert from "./invert";
import invertBy from "./invertBy";
import invoke from "./invoke";
import keys from "./keys";
import keysIn from "./keysIn";
import mapKeys from "./mapKeys";
import toPairs from "./toPairs";
import toPairsIn from "./toPairsIn";

const ObjectRules: RuleProps[] = [
  assign,
  assignIn,
  assignInWith,
  assignWith,
  at,
  create,
  defaults,
  defaultsDeep,
  findKey,
  findLastKey,
  forIn,
  forInRight,
  forOwn,
  forOwnRight,
  functions,
  functionsIn,
  get,
  has,
  hasIn,
  invert,
  invertBy,
  invoke,
  keys,
  keysIn,
  mapKeys,
  toPairs,
  toPairsIn,
];

const ObjectChapter: ChapterProps = {
  id: "chapter-object",
  title: "Object",
  rules: ObjectRules,
};

export default ObjectChapter;
