import { ChapterProps } from "@src/components/Chapter";
import { RuleProps } from "@src/components/Rule";

import after from "./after";
import ary from "./ary";
import before from "./before";
import bind from "./bind";
import bindKey from "./bindKey";
import curry from "./curry";
import curryRight from "./curryRight";
import debounce from "./debounce";
import defer from "./defer";
import delay from "./delay";
import flip from "./flip";
import memoize from "./memoize";
import negate from "./negate";
import once from "./once";
import overArgs from "./overArgs";
import partial from "./partial";
import partialRight from "./partialRight";
import rearg from "./rearg";
import rest from "./rest";
import spread from "./spread";
import throttle from "./throttle";
import unary from "./unary";
import wrap from "./wrap";

const FunctionRules: RuleProps[] = [
  after,
  ary,
  before,
  bind,
  bindKey,
  curry,
  curryRight,
  debounce,
  defer,
  delay,
  flip,
  memoize,
  negate,
  once,
  overArgs,
  partial,
  partialRight,
  rearg,
  rest,
  spread,
  throttle,
  unary,
  wrap,
];

const FunctionChapter: ChapterProps = {
  id: "chapter-function",
  title: "Function",
  rules: FunctionRules,
};

export default FunctionChapter;
