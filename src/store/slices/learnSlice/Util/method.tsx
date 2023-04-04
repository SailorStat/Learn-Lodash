import React from "react";
import { RuleProps } from "@src/components/Rule";

const method: RuleProps = {
  id: "_.method",
  blocks: [
    {
      type: "title",
      title: { id: "_.method-title", children: "_.method" },
    },
    {
      type: "description",
      description: {
        id: "_.method-description",
        children: (
          <>
            Принимает <b>путь</b>. Bозвращает <b>функцию</b>, которая принимает объект и возвращает результат вызова
            функции по переданному пути
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.method-code",
        language: "ts",
        children: `const baseArray = [
  { a: { c: () => 2 }, b: 1 },
  { a: { c: () => 1 }, b: 2 },
];

console.log(_.map(baseArray, _.method("a.c"))); // [2, 1];`,
      },
    },
  ],
};

export default method;
