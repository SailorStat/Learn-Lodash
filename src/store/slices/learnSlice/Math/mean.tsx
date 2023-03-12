import React from "react";
import { RuleProps } from "@src/components/Rule";

const mean: RuleProps = {
  id: "_.mean",
  blocks: [
    {
      type: "title",
      title: { id: "_.mean-title", children: "_.mean" },
    },
    {
      type: "description",
      description: {
        id: "_.mean-description",
        children: (
          <>
            Принимает <b>массив чисел</b>. Bозвращает <b>среднее арифметическое</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.mean-code",
        language: "ts",
        children: `const mean = _.mean([-2, 5, 3]);
console.log(mean); // 2;`,
      },
    },
  ],
};

export default mean;
