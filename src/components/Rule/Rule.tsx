import "./style.scss";
import React from "react";

import Code from "../Code";
import ComparisonCode, { ComparisonCodes } from "../ComparisonCode";
import Description from "../Description";
import Title from "../Title";
import { RuleProps } from "./types";

const Rule = ({ blocks }: RuleProps) => {
  const components = {
    title: Title,
    description: Description,
    code: Code,
    comparisonCode: ComparisonCode,
  };
  const title = "_.chunk";
  const titleId = "_.chunk-title";
  const descriptionId = "_.chunk-description";
  const description = (
    <>
      Делит массив на массивы <b>указанного размера</b>
    </>
  );
  const codeId = "_.chunk-code";
  const codeLanguage = "ts";
  const code = `const a = function(): number {
    return 1 + "1234"; // 1235
  }`;
  const comparisonCodeId = "_.chunk-comparisonCode";
  const comparisonCodeCodesProps: ComparisonCodes = [
    { language: "ts", id: "_.chunk-code-0", children: code },
    { language: "ts", id: "_.chunk-code-0", children: code },
  ];

  return (
    <div className="rule">
      {blocks.map((block, index) => {
        const Component = components[block.type];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const props = (block as any)[block.type];
        const key = `${block.type}-${index}-${props?.id}`;

        return props ? <Component key={key} {...props} /> : null;
      })}
      <Title id={titleId}>{title}</Title>
      <Description id={descriptionId}>{description}</Description>
      <Code language={codeLanguage} id={codeId}>
        {code}
      </Code>
      <ComparisonCode id={comparisonCodeId} codesProps={comparisonCodeCodesProps} />
    </div>
  );
};

export default Rule;
