import React from "react";
import { RuleProps } from "@src/components/Rule";

const min: RuleProps = {
  id: "_.min",
  blocks: [
    {
      type: "title",
      title: { id: "_.min-title", children: "_.min" },
    },
    {
      type: "description",
      description: {
        id: "_.min-description",
        children: (
          <>
            Принимает <b>массив чисел</b>. Bозвращает <b>наименьшее число</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.min-code",
        language: "ts",
        children: `const min = _.min([0, 3]);
console.log(min); // 0;`,
      },
    },
  ],
};

export default min;
