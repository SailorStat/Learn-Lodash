import React from "react";
import { RuleProps } from "@src/components/Rule";

const ceil: RuleProps = {
  id: "_.ceil",
  blocks: [
    {
      type: "title",
      title: { id: "_.ceil-title", children: "_.ceil" },
    },
    {
      type: "description",
      description: {
        id: "_.ceil-description",
        children: (
          <>
            Принимает <b>число и индекс</b>. Bозвращает <b>число</b> после округления в большую сторону до указанного
            количества знаков
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.ceil-code",
        language: "ts",
        children: `const ceiled = _.ceil(2.12);
console.log(ceiled); // 3;

const ceiled2 = _.ceil(2.12, 1);
console.log(ceiled2); // 2.2;

const ceiled3 = _.ceil(21.2, -1);
console.log(ceiled3); // 30;`,
      },
    },
  ],
};

export default ceil;
