import React from "react";
import { RuleProps } from "@src/components/Rule";

const initial: RuleProps = {
  id: "_.initial",
  blocks: [
    {
      type: "title",
      title: { id: "_.initial-title", children: "_.initial" },
    },
    {
      type: "description",
      description: {
        id: "_.initial-description",
        children: (
          <>
            Принимает <b>массив</b>, возвращает <b>массив</b> без последнего элемента
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.initial-code",
        language: "ts",
        children: `const baseArray = [
  { a: 3, b: 1 },
  { a: 0, b: 5 },
  { a: 3, b: 2 },
  { a: 4, b: 1 },
];

const initialed = _.initial(baseArray);
console.log(initialed); // [{ a: 3, b: 1 }, { a: 0, b: 5 }, { a: 3, b: 2 }];`,
      },
    },
  ],
};

export default initial;
