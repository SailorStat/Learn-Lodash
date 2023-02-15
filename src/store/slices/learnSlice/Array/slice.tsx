import React from "react";
import { RuleProps } from "@src/components/Rule";

const slice: RuleProps = {
  id: "_.slice",
  blocks: [
    {
      type: "title",
      title: { id: "_.slice-title", children: "_.slice" },
    },
    {
      type: "description",
      description: {
        id: "_.slice-description",
        children: (
          <>
            Принимает <b>массив, стартовый индекс и конечный индекс</b>, возвращает <b>массив</b> значений между
            переданными индексами (если последнего индекса нет, возвращает до конца)
            <div>Новый массив начинается со значения стартового индекса и не включает значение в конечном индексе</div>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.slice-code",
        language: "ts",
        children: `const baseArray = [
  { a: 3, b: 1 },
  { a: 0, b: 5 },
  { a: 3, b: 2 },
  { a: 4, b: 1 },
];

const sliced = _.slice(baseArray, 1, 2);
console.log(sliced); // [{ a: 0, b: 5 }];`,
      },
    },
  ],
};

export default slice;
