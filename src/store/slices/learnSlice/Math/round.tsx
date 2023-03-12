import React from "react";
import { RuleProps } from "@src/components/Rule";

const round: RuleProps = {
  id: "_.round",
  blocks: [
    {
      type: "title",
      title: { id: "_.round-title", children: "_.round" },
    },
    {
      type: "description",
      description: {
        id: "_.round-description",
        children: (
          <>
            Принимает <b>число и индекс</b>. Bозвращает <b>число</b> после округления до указанного количества знаков
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.round-code",
        language: "ts",
        children: `const rounded = _.round(2.12);
console.log(rounded); // 2;

const rounded2 = _.round(2.52, 1);
console.log(rounded2); // 2.3;

const rounded3 = _.round(21.2, -1);
console.log(rounded3); // 20;`,
      },
    },
  ],
};

export default round;
