import React from "react";
import { RuleProps } from "@src/components/Rule";

const xor: RuleProps = {
  id: "_.xor",
  blocks: [
    {
      type: "title",
      title: { id: "_.xor-title", children: "_.xor" },
    },
    {
      type: "description",
      description: {
        id: "_.xor-description",
        children: (
          <>
            Принимает <b>массивы</b>, возвращает <b>массив</b> уникальных значений, которые есть только в одном массиве
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.xor-code",
        language: "ts",
        children: `const baseArray = [1, 5, 2, 1, 5, 3];

const xored = _.xor(baseArray, [2, 4, 6, 8], [3, 8]);
console.log(xored); // [1, 5, 4, 6];`,
      },
    },
  ],
};

export default xor;
