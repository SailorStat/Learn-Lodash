import React from "react";
import { RuleProps } from "@src/components/Rule";

const rearg: RuleProps = {
  id: "_.rearg",
  blocks: [
    {
      type: "title",
      title: { id: "_.rearg-title", children: "_.rearg" },
    },
    {
      type: "description",
      description: {
        id: "_.rearg-description",
        children: (
          <>
            Принимает <b>функцию и массив с порядком аргументов</b>, возвращает <b>функцию</b>, которая при вызове
            изменит порядок аргументов в соответствии с массивом
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.rearg-code",
        language: "ts",
        children: `const groupMul = (a: number, b: number, c: number) => {
  return [a, a * b, a * b * c];
};

const rearged = _.rearg(groupMul, [2, 0, 1]);
const muls = rearged(3, 5, 2);
console.log(muls); // [2, 6, 30];`,
      },
    },
  ],
};

export default rearg;
