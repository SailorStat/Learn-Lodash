import React from "react";
import { RuleProps } from "@src/components/Rule";

const unary: RuleProps = {
  id: "_.unary",
  blocks: [
    {
      type: "title",
      title: { id: "_.unary-title", children: "_.unary" },
    },
    {
      type: "description",
      description: {
        id: "_.unary-description",
        children: (
          <>
            Принимает <b>функцию</b>, возвращает <b>функцию</b>, которая ожидает только первый аргумент
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.unary-code",
        language: "ts",
        children: `const groupMul = (a: number, b: number, c: number) => {
  return [a, a * b, a * b * c];
};

const unared = _.unary(groupMul);
const muls = unared(3);
console.log(muls); // [3, NaN, NaN];`,
      },
    },
  ],
};

export default unary;
