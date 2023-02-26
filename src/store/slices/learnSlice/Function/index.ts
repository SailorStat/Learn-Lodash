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

const FunctionRules: RuleProps[] = [after, ary, before, bind, bindKey, curry, curryRight, debounce, defer];

const FunctionChapter: ChapterProps = {
  id: "chapter-function",
  title: "Function",
  rules: FunctionRules,
};

export default FunctionChapter;
