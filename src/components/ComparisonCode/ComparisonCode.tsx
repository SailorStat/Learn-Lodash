import "./style.scss";
import React from "react";

import Code from "../Code";
import { ComparisonCodeProps } from "./types";

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
