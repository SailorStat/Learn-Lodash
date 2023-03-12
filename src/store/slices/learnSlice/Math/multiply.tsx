import React from "react";
import { RuleProps } from "@src/components/Rule";

const multiply: RuleProps = {
  id: "_.multiply",
  blocks: [
    {
      type: "title",
      title: { id: "_.multiply-title", children: "_.multiply" },
    },
    {
      type: "description",
      description: {
        id: "_.multiply-description",
        children: (
          <>
            Принимает <b>два числа</b>. Bозвращает <b>число</b> произведение
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.multiply-code",
        language: "ts",
        children: `const multiplied = _.multiply(2, 3);
console.log(multiplied); // 6;`,
      },
    },
  ],
};

export default multiply;
