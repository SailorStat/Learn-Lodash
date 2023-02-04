import "./style.scss";
import React from "react";

import Code from "../Code";
import ComparisonCode from "../ComparisonCode";
import Description from "../Description";
import Title from "../Title";
import { RuleProps } from "./types";

const Rule = ({ blocks, id }: RuleProps) => {
  const components = {
    title: Title,
    description: Description,
    code: Code,
    comparisonCode: ComparisonCode,
  };

  return (
    <div id={id} className="rule">
      {blocks.map((block, index) => {
        const Component = components[block.type];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const props = (block as any)[block.type];
        const key = `${block.type}-${index}-${props?.id}`;

        return props ? <Component key={key} {...props} /> : null;
      })}
    </div>
  );
};

export default Rule;
