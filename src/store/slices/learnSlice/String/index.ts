import { ChapterProps } from "@src/components/Chapter";
import { RuleProps } from "@src/components/Rule";

import camelCase from "./camelCase";
import capitalize from "./capitalize";
import deburr from "./deburr";
import endsWith from "./endsWith";
import escape from "./escape";
import escapeRegExp from "./escapeRegExp";

const StringRules: RuleProps[] = [camelCase, capitalize, deburr, endsWith, escape, escapeRegExp];

const StringChapter: ChapterProps = {
  id: "chapter-string",
  title: "String",
  rules: StringRules,
};

export default StringChapter;
