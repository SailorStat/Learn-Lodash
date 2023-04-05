import "./style.scss";
import React from "react";

import Rule, { RuleProps } from "../Rule";

export interface ChapterProps {
  rules: RuleProps[];
  id: string;
  title: string;
}

const Chapter: React.FC<Partial<ChapterProps>> = ({ rules, id, title }) => {
  if (!rules || !id || !title) {
    return null;
  }

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
