import React from "react";
import { RuleProps } from "@src/components/Rule";

const sum: RuleProps = {
  id: "_.sum",
  blocks: [
    {
      type: "title",
      title: { id: "_.sum-title", children: "_.sum" },
    },
    {
      type: "description",
      description: {
        id: "_.sum-description",
        children: (
          <>
            Принимает <b>массив чисел</b>. Bозвращает <b>сумму</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.sum-code",
        language: "ts",
        children: `const sum = _.sum([0, 3, 5]);
console.log(sum); // 8;`,
      },
    },
  ],
};

export default sum;
