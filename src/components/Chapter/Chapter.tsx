import "./style.scss";
import React from "react";

import Rule, { RuleProps } from "../Rule";

export interface ChapterProps {
  rules: RuleProps[];
  id: string;
  title: string;
}

const Chapter: React.FC<ChapterProps> = ({ rules, id, title }) => {
  // const comparisonCodeId = "_.chunk-comparisonCode";
  // const comparisonCodeCodesProps: ComparisonCodes = [
  //   { language: "ts", id: "_.chunk-code-0", children: "const a = 42;" },
  //   { language: "ts", id: "_.chunk-code-0", children: "const b = 42;" },
  // ];

  return (
    <>
      <div id={id} className="chapter-title">
        {title}
      </div>
      {rules.map((props) => (
        <Rule key={`${props.id}-Rule-Chapter`} {...props} />
      ))}
    </>
  );
};

export default Chapter;
