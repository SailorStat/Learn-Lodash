import React from "react";
import { RuleProps } from "@src/components/Rule";

const divide: RuleProps = {
  id: "_.divide",
  blocks: [
    {
      type: "title",
      title: { id: "_.divide-title", children: "_.divide" },
    },
    {
      type: "description",
      description: {
        id: "_.divide-description",
        children: (
          <>
            Принимает <b>делимое и делитель</b>. Bозвращает <b>частное</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.divide-code",
        language: "ts",
        children: `const divided = _.divide(12, 4);
console.log(divided); // 3;`,
      },
    },
  ],
};

export default divide;
