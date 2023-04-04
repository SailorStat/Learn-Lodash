import React from "react";
import { RuleProps } from "@src/components/Rule";

const flow: RuleProps = {
  id: "_.flow",
  blocks: [
    {
      type: "title",
      title: { id: "_.flow-title", children: "_.flow" },
    },
    {
      type: "description",
      description: {
        id: "_.flow-description",
        children: (
          <>
            Принимает <b>массив функций</b>. Bозвращает <b>функцию</b>, которая принимает значения и последовательно
            вызывает функции из массива
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.flow-code",
        language: "ts",
        children: `const square = (n: number) => n * n;

const addSquare = _.flow([_.add, square]);
console.log(addSquare(3, 2)); // 25;`,
      },
    },
  ],
};

export default flow;
