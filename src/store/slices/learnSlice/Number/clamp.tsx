import React from "react";
import { RuleProps } from "@src/components/Rule";

const clamp: RuleProps = {
  id: "_.clamp",
  blocks: [
    {
      type: "title",
      title: { id: "_.clamp-title", children: "_.clamp" },
    },
    {
      type: "description",
      description: {
        id: "_.clamp-description",
        children: (
          <>
            Принимает <b>2 или 3 числа</b>. Bозвращает <b>число</b>, не являющееся наибольшим и наименьшим
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.clamp-code",
        language: "ts",
        children: `const clamped = _.clamp(1, 3, 2);
console.log(clamped); // 2;`,
      },
    },
  ],
};

export default clamp;
