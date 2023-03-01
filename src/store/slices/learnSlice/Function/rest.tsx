import React from "react";
import { RuleProps } from "@src/components/Rule";

const rest: RuleProps = {
  id: "_.rest",
  blocks: [
    {
      type: "title",
      title: { id: "_.rest-title", children: "_.rest" },
    },
    {
      type: "description",
      description: {
        id: "_.rest-description",
        children: (
          <>
            Принимает <b>функцию</b>, возвращает <b>функцию</b>, которая при вызове из последнего и лишних аргументов
            вернёт массив
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.rest-code",
        language: "ts",
        children: `const groupMul = (a: number, nums: number[]) => {
  return [a, a * nums[0], a * nums[0] * nums[1]];
};

const rested = _.rest(groupMul);
const muls = rested(2, 3, 5);
console.log(muls); // [2, 6, 30];`,
      },
    },
  ],
};

export default rest;
