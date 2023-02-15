import React from "react";
import { RuleProps } from "@src/components/Rule";

const union: RuleProps = {
  id: "_.union",
  blocks: [
    {
      type: "title",
      title: { id: "_.union-title", children: "_.union" },
    },
    {
      type: "description",
      description: {
        id: "_.union-description",
        children: (
          <>
            Принимает <b>массивы</b>, возвращает <b>массив</b> уникальных значений
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.union-code",
        language: "ts",
        children: `const baseArray = [1, 2, 3, 5, 8];
const baseArray2 = [1, 2, 4, 8, 16];
const baseArray3 = [1, 3, 5, 7, 9];

const united = _.union(baseArray, baseArray2, baseArray3);
console.log(united); // [1, 2, 3, 5, 8, 4, 16, 7, 9];`,
      },
    },
  ],
};

export default union;
