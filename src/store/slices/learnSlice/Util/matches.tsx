import React from "react";
import { RuleProps } from "@src/components/Rule";

const matches: RuleProps = {
  id: "_.matches",
  blocks: [
    {
      type: "title",
      title: { id: "_.matches-title", children: "_.matches" },
    },
    {
      type: "description",
      description: {
        id: "_.matches-description",
        children: (
          <>
            Принимает <b>объект</b>. Bозвращает <b>функцию</b> глубокого частичного сравнения
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.matches-code",
        language: "ts",
        children: `const baseArray = [
  { a: 3, b: 1 },
  { a: 0, b: 5 },
  { a: 3, b: 2 },
  { a: 4, b: 1 },
];

const matched = _.map(baseArray, _.matches({ b: 1 }));
console.log(matched); // [true, false, false, true];`,
      },
    },
  ],
};

export default matches;
