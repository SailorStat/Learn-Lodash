import { ChapterProps } from "@src/components/Chapter";
import { RuleProps } from "@src/components/Rule";

import castArray from "./castArray";
import clone from "./clone";
import cloneDeep from "./cloneDeep";
import cloneDeepWith from "./cloneDeepWith";
import cloneWith from "./cloneWith";
import conformsTo from "./conformsTo";
import eq from "./eq";
import gt from "./gt";
import gte from "./gte";
import isArguments from "./isArguments";
import isArray from "./isArray";
import isArrayBuffer from "./isArrayBuffer";
import isArrayLike from "./isArrayLike";
import isArrayLikeObject from "./isArrayLikeObject";
import isBoolean from "./isBoolean";
import isBuffer from "./isBuffer";
import isDate from "./isDate";
import isElement from "./isElement";
import isEmpty from "./isEmpty";
import isEqual from "./isEqual";
import isEqualWith from "./isEqualWith";
import isError from "./isError";

const LangRules: RuleProps[] = [
  castArray,
  clone,
  cloneDeep,
  cloneDeepWith,
  cloneWith,
  conformsTo,
  eq,
  gt,
  gte,
  isArguments,
  isArray,
  isArrayBuffer,
  isArrayLike,
  isArrayLikeObject,
  isBoolean,
  isBuffer,
  isDate,
  isElement,
  isEmpty,
  isEqual,
  isEqualWith,
  isError,
];

const LangChapter: ChapterProps = {
  id: "lang-date",
  title: "Lang",
  rules: LangRules,
};

export default LangChapter;
