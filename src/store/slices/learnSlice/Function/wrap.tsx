import React from "react";
import { RuleProps } from "@src/components/Rule";

const wrap: RuleProps = {
  id: "_.wrap",
  blocks: [
    {
      type: "title",
      title: { id: "_.wrap-title", children: "_.wrap" },
    },
    {
      type: "description",
      description: {
        id: "_.wrap-description",
        children: (
          <>
            Принимает <b>функцию и функцию, которая первым аргументом ожижает первую функциию</b>, возвращает{" "}
            <b>функцию</b>, которая ожидает остальные аргументы второй функции
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.wrap-code",
        language: "ts",
        children:
          "const toObj = (num: number) => ({ [`${num}`" +
          `]: num });

const groupMul = (
  func: (num: number) => { [num: string]: number },
  a: number,
  b: number,
  c: number,
) => {
  return [func(a), func(a * b), func(a * b * c)];
};

const wraped = _.wrap(toObj, groupMul);
const muls = wraped(2, 3, 5);
console.log(muls); // [{ "2": 2 }, { "6": 6 }, { "30": 30 }];`,
      },
    },
  ],
};

export default wrap;
