import { ChapterProps } from "@src/components/Chapter";
import { RuleProps } from "@src/components/Rule";

import attempt from "./attempt";
import bindAll from "./bindAll";
import cond from "./cond";
import conforms from "./conforms";
import constant from "./constant";
import defaultTo from "./defaultTo";
import flow from "./flow";
import flowRight from "./flowRight";
import identity from "./identity";
import iteratee from "./iteratee";
import matches from "./matches";
import matchesProperty from "./matchesProperty";
import method from "./method";
import methodOf from "./methodOf";
import mixin from "./mixin";
import noConflict from "./noConflict";
import noop from "./noop";
import nthArg from "./nthArg";
import over from "./over";
import overEvery from "./overEvery";
import overSome from "./overSome";
import property from "./property";
import propertyOf from "./propertyOf";
import range from "./range";
import rangeRight from "./rangeRight";
import runInContext from "./runInContext";
import stubArray from "./stubArray";
import stubFalse from "./stubFalse";
import stubObject from "./stubObject";
import stubString from "./stubString";
import stubTrue from "./stubTrue";
import times from "./times";
import toPath from "./toPath";
import uniqueId from "./uniqueId";

const UtilRules: RuleProps[] = [
  attempt,
  bindAll,
  cond,
  conforms,
  constant,
  defaultTo,
  flow,
  flowRight,
  identity,
  iteratee,
  matches,
  matchesProperty,
  method,
  methodOf,
  mixin,
  noConflict,
  noop,
  nthArg,
  over,
  overEvery,
  overSome,
  property,
  propertyOf,
  range,
  rangeRight,
  runInContext,
  stubArray,
  stubFalse,
  stubObject,
  stubString,
  stubTrue,
  times,
  toPath,
  uniqueId,
];

const UtilChapter: ChapterProps = {
  id: "chapter-util",
  title: "Util",
  rules: UtilRules,
};

export default UtilChapter;
