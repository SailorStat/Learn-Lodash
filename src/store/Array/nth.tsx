import React from "react";
import { RuleProps } from "@src/components/Rule";

const nth: RuleProps = {
  id: "_.nth",
  blocks: [
    {
      type: "title",
      title: { id: "_.nth-title", children: "_.nth" },
    },
    {
      type: "description",
      description: {
        id: "_.nth-description",
        children: (
          <>
            Принимает <b>массив и индекс</b>, возвращает <b>значение по указанному индексу</b> (для отрицательных
            индексов возвращает значение с конца)
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.nth-code",
        language: "ts",
        children: `const baseArray = [
  { a: 3, b: 1 },
  { a: 0, b: 5 },
  { a: 3, b: 2 },
  { a: 4, b: 1 },
];

const index = _.nth(baseArray, 1);
console.log(index); // { a: 0, b: 5 };

const index2 = _.nth(baseArray, -1);
console.log(index2); // { a: 4, b: 1 };`,
      },
    },
  ],
};

export default nth;
