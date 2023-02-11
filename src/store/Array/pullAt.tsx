import React from "react";
import Warning from "@src/components/common/Warning";
import { RuleProps } from "@src/components/Rule";

const pullAt: RuleProps = {
  id: "_.pullAt",
  blocks: [
    {
      type: "title",
      title: { id: "_.pullAt-title", children: "_.pullAt" },
    },
    {
      type: "description",
      description: {
        id: "_.pullAt-description",
        children: (
          <>
            Принимает <b>массив и массив индексов</b>, возвращает <b>массив значений</b> под индексами
            <div>Иходный массив остаётся с невостребованными значениями</div>
            <Warning>Мутирует исходный массив</Warning>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.pullAt-code",
        language: "ts",
        children: `const baseArray = [
  { a: 3, b: 1 },
  { a: 0, b: 5 },
  { a: 3, b: 2 },
  { a: 4, b: 1 },
];

const pulledAt = _.pullAt(baseArray, [0, 2]);
console.log(pulledAt); // [{ a: 3, b: 1 }, { a: 3, b: 2 }];
console.log(baseArray); // [{ a: 0, b: 5 }, { a: 4, b: 1 }];`,
      },
    },
  ],
};

export default pullAt;
