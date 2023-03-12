import React from "react";
import { RuleProps } from "@src/components/Rule";

const subtract: RuleProps = {
  id: "_.subtract",
  blocks: [
    {
      type: "title",
      title: { id: "_.subtract-title", children: "_.subtract" },
    },
    {
      type: "description",
      description: {
        id: "_.subtract-description",
        children: (
          <>
            Принимает <b>уменьшаемое и вычитаемое</b>. Bозвращает <b>число</b>разницу
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.subtract-code",
        language: "ts",
        children: `const subtracted = _.subtract(5, 3);
console.log(subtracted); // 2;`,
      },
    },
  ],
};

export default subtract;
