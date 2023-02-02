import { CodeProps } from "../Code";

export type ComparisonCodes = [CodeProps, CodeProps];

export interface ComparisonCodeProps {
  codesProps: ComparisonCodes;
  id: string;
}
