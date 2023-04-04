import React from "react";
import { RuleProps } from "@src/components/Rule";

const matchesProperty: RuleProps = {
  id: "_.matchesProperty",
  blocks: [
    {
      type: "title",
      title: { id: "_.matchesProperty-title", children: "_.matchesProperty" },
    },
    {
      type: "description",
      description: {
        id: "_.matchesProperty-description",
        children: (
          <>
            Принимает <b>ключ и значение</b>. Bозвращает <b>функцию</b> глубокого частичного сравнения
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.matchesProperty-code",
        language: "ts",
        children: `const baseArray = [
  { a: 3, b: 1 },
  { a: 0, b: 5 },
  { a: 3, b: 2 },
  { a: 4, b: 1 },
];

const matched = _.map(baseArray, _.matchesProperty("b", 1));
console.log(matched); // [true, false, false, true];`,
      },
    },
  ],
};

export default matchesProperty;
