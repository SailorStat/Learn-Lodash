import React from "react";
import { RuleProps } from "@src/components/Rule";

const last: RuleProps = {
  id: "_.last",
  blocks: [
    {
      type: "title",
      title: { id: "_.last-title", children: "_.last" },
    },
    {
      type: "description",
      description: {
        id: "_.last-description",
        children: (
          <>
            Принимает <b>массив</b>, возвращает <b>последнее значение массива</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.last-code",
        language: "ts",
        children: `const baseArray = [
  { a: 3, b: 1 },
  { a: 0, b: 5 },
  { a: 3, b: 2 },
  { a: 4, b: 1 },
];

const latest = _.last(baseArray);
console.log(latest); // { a: 4, b: 1 };`,
      },
    },
  ],
};

export default last;
