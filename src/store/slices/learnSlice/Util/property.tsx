import React from "react";
import { RuleProps } from "@src/components/Rule";

const property: RuleProps = {
  id: "_.property",
  blocks: [
    {
      type: "title",
      title: { id: "_.property-title", children: "_.property" },
    },
    {
      type: "description",
      description: {
        id: "_.property-description",
        children: (
          <>
            Принимает <b>путь</b>. Возвращает <b>функцию</b>, которая принимает объект, возвращает значение по
            указанному пути
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.property-code",
        language: "ts",
        children: `const baseArray = [
  { a: 3, b: 1 },
  { a: 0, b: 5 },
  { a: 3, b: 2 },
  { a: 3, b: 1 },
];
const propertyFunc = _.property("[1].b");
console.log(propertyFunc(baseArray)); // 5;`,
      },
    },
  ],
};

export default property;
