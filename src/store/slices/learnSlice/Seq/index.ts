import { ChapterProps } from "@src/components/Chapter";
import { RuleProps } from "@src/components/Rule";

import _ from "./_";
import atProto from "./atProto";
import chain from "./chain";
import chainProto from "./chainProto";
import commitProto from "./commitProto";
import enableIterator from "./enableIterator";
import nextProto from "./nextProto";
import plantProto from "./plantProto";
import reverseProto from "./reverseProto";
import tap from "./tap";
import thru from "./thru";
import valueProto from "./valueProto";

const SeqRules: RuleProps[] = [
  _,
  chain,
  tap,
  thru,
  enableIterator,
  atProto,
  chainProto,
  commitProto,
  nextProto,
  plantProto,
  reverseProto,
  valueProto,
];

const SeqChapter: ChapterProps = {
  id: "chapter-seq",
  title: "Seq",
  rules: SeqRules,
};

export default SeqChapter;
