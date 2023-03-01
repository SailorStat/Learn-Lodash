import React from "react";
import { RuleProps } from "@src/components/Rule";

const spread: RuleProps = {
  id: "_.spread",
  blocks: [
    {
      type: "title",
      title: { id: "_.spread-title", children: "_.spread" },
    },
    {
      type: "description",
      description: {
        id: "_.spread-description",
        children: (
          <>
            Принимает <b>функцию</b>, возвращает <b>функцию</b>, которая при вызове принимает массив аргументов
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.spread-code",
        language: "ts",
        children: `const groupMul = (a: number, b: number, c: number) => {
  return [a, a * b, a * b * c];
};

const spreaded = _.spread(groupMul);
const muls = spreaded([2, 3, 5]);
console.log(muls); // [2, 6, 30];`,
      },
    },
  ],
};

export default spread;
