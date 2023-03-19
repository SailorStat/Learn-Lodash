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
import mapValues from "./mapValues";
import merge from "./merge";
import mergeWith from "./mergeWith";
import omit from "./omit";
import omitBy from "./omitBy";
import pick from "./pick";
import pickBy from "./pickBy";
import result from "./result";
import set from "./set";
import setWith from "./setWith";
import toPairs from "./toPairs";
import toPairsIn from "./toPairsIn";
import transform from "./transform";
import unset from "./unset";
import update from "./update";
import updateWith from "./updateWith";
import values from "./values";
import valuesIn from "./valuesIn";

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
  mapValues,
  merge,
  mergeWith,
  omit,
  omitBy,
  pick,
  pickBy,
  result,
  set,
  setWith,
  toPairs,
  toPairsIn,
  transform,
  unset,
  update,
  updateWith,
  values,
  valuesIn,
];

const ObjectChapter: ChapterProps = {
  id: "chapter-object",
  title: "Object",
  rules: ObjectRules,
};

export default ObjectChapter;
