import React from "react";
import { RuleProps } from "@src/components/Rule";

const conforms: RuleProps = {
  id: "_.conforms",
  blocks: [
    {
      type: "title",
      title: { id: "_.conforms-title", children: "_.conforms" },
    },
    {
      type: "description",
      description: {
        id: "_.conforms-description",
        children: (
          <>
            Принимает <b>объект со значениями в виде функций</b>. Bозвращает <b>функцию</b>, которая принимает объект и
            возвращает true, если условие выполняется для всего объекта
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.conforms-code",
        language: "ts",
        children: `const objects = [
  { a: 2, b: 1 },
  { a: 1, b: 2 },
];

console.log(_.map(
  objects,
  _.conforms({ b: (n: number) => n > 1 })
)); // [false, true];`,
      },
    },
  ],
};

export default conforms;
