import "./style.scss";
import React from "react";

import Code, { CodeProps } from "../Code";

export type ComparisonCodeProps_Codes = [CodeProps, CodeProps];

export interface ComparisonCodeProps {
  codesProps: ComparisonCodeProps_Codes;
}

const ComparisonCode: React.FC<ComparisonCodeProps> = ({ codesProps }) => {
  return (
    <div className="comparison__code">
      {codesProps.map((props) => (
        <Code key={props.id} {...props} />
      ))}
    </div>
  );
};

export default ComparisonCode;
