import React from "react";
import { RuleProps } from "@src/components/Rule";

const methodOf: RuleProps = {
  id: "_.methodOf",
  blocks: [
    {
      type: "title",
      title: { id: "_.methodOf-title", children: "_.methodOf" },
    },
    {
      type: "description",
      description: {
        id: "_.methodOf-description",
        children: (
          <>
            Принимает <b>объект</b>. Bозвращает <b>функцию</b>, которая принимает путь или массив путей и возвращает
            результат вызова функции по переданному пути
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.methodOf-code",
        language: "ts",
        children: `const baseArray = [
  { a: { c: () => 2 }, b: 1 },
  { a: { c: () => 1 }, b: 2 },
];

console.log(_.map(["[0]a.c", "[1]a.c"], _.methodOf(baseArray))); // [2, 1];`,
      },
    },
  ],
};

export default methodOf;
