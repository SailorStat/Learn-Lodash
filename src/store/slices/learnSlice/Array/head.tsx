import React from "react";
import { RuleProps } from "@src/components/Rule";

const head: RuleProps = {
  id: "_.head",
  blocks: [
    {
      type: "title",
      title: { id: "_.head-title", children: "_.head" },
    },
    {
      type: "description",
      description: {
        id: "_.head-description",
        children: (
          <>
            Принимает <b>массив</b>, возвращает <b>первый элемент массива</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.head-code",
        language: "ts",
        children: `const baseArray = [
  { a: 3, b: 1 },
  { a: 0, b: 5 },
  { a: 3, b: 2 },
  { a: 3, b: 1 },
];

const head = _.head(baseArray);
console.log(head); // { a: 3, b: 1 };`,
      },
    },
  ],
};

export default head;
