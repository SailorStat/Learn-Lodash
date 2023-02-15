import React from "react";
import { RuleProps } from "@src/components/Rule";

const tail: RuleProps = {
  id: "_.tail",
  blocks: [
    {
      type: "title",
      title: { id: "_.tail-title", children: "_.tail" },
    },
    {
      type: "description",
      description: {
        id: "_.tail-description",
        children: (
          <>
            Принимает <b>массив</b>, возвращает <b>массив</b> без нулевого элемента
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.tail-code",
        language: "ts",
        children: `const baseArray = [
  { a: 3, b: 1 },
  { a: 0, b: 5 },
  { a: 3, b: 2 },
  { a: 4, b: 1 },
];

const tailed = _.tail(baseArray);
console.log(tailed); // [{ a: 0, b: 5 }, { a: 3, b: 2 }, { a: 4, b: 1 }];`,
      },
    },
  ],
};

export default tail;
