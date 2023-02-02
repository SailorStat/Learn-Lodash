import { CodeProps } from "../Code";
import { ComparisonCodeProps } from "../ComparisonCode";
import { DescriptionProps } from "../Description";
import { TitleProps } from "../Title";

export type RuleBlockType = "code" | "title" | "description" | "comparisonCode";

interface RuleBlockTemplate<T extends RuleBlockType> {
  type: T;
}

interface RuleBlockCode extends RuleBlockTemplate<"code"> {
  code: CodeProps;
}

interface RuleBlockTitle extends RuleBlockTemplate<"title"> {
  title: TitleProps;
}

interface RuleBlockComparisonCode extends RuleBlockTemplate<"comparisonCode"> {
  comparisonCode: ComparisonCodeProps;
}

interface RuleBlockDescription extends RuleBlockTemplate<"description"> {
  description: DescriptionProps;
}

export type RuleBlock = RuleBlockCode | RuleBlockTitle | RuleBlockComparisonCode | RuleBlockDescription;

export interface RuleProps {
  blocks: RuleBlock[];
}
