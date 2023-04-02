import { ChapterProps } from "@src/components/Chapter";
import { RuleProps } from "@src/components/Rule";

import camelCase from "./camelCase";
import capitalize from "./capitalize";
import deburr from "./deburr";
import endsWith from "./endsWith";
import escape from "./escape";
import escapeRegExp from "./escapeRegExp";
import kebabCase from "./kebabCase";
import lowerCase from "./lowerCase";
import lowerFirst from "./lowerFirst";
import pad from "./pad";
import padEnd from "./padEnd";
import padStart from "./padStart";
import parseInt from "./parseInt";
import repeat from "./repeat";
import replace from "./replace";
import snakeCase from "./snakeCase";
import split from "./split";
import startCase from "./startCase";
import startsWith from "./startsWith";
import template from "./template";

const StringRules: RuleProps[] = [
  camelCase,
  capitalize,
  deburr,
  endsWith,
  escape,
  escapeRegExp,
  kebabCase,
  lowerCase,
  lowerFirst,
  pad,
  padEnd,
  padStart,
  parseInt,
  repeat,
  replace,
  snakeCase,
  split,
  startCase,
  startsWith,
  template,
];

const StringChapter: ChapterProps = {
  id: "chapter-string",
  title: "String",
  rules: StringRules,
};

export default StringChapter;
