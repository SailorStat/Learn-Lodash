import React from "react";
import { RuleProps } from "@src/components/Rule";

const max: RuleProps = {
  id: "_.max",
  blocks: [
    {
      type: "title",
      title: { id: "_.max-title", children: "_.max" },
    },
    {
      type: "description",
      description: {
        id: "_.max-description",
        children: (
          <>
            Принимает <b>массив чисел</b>. Bозвращает <b>наибольшее число</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.max-code",
        language: "ts",
        children: `const max = _.max([0, 3]);
console.log(max); // 3;`,
      },
    },
  ],
};

export default max;
