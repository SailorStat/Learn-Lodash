import React from "react";
import { RuleProps } from "@src/components/Rule";

const propertyOf: RuleProps = {
  id: "_.propertyOf",
  blocks: [
    {
      type: "title",
      title: { id: "_.propertyOf-title", children: "_.propertyOf" },
    },
    {
      type: "description",
      description: {
        id: "_.propertyOf-description",
        children: (
          <>
            Принимает <b>объект</b>. Bозвращает <b>функцию</b>, которая принимает путь или массив путей и возвращает
            значение по переданному пути
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.propertyOf-code",
        language: "ts",
        children: `const baseArray = [
  { a: { c: 2 }, b: 1 },
  { a: { c: 1 }, b: 2 },
];

const propertyOfBaseArray = _.propertyOf(baseArray);
console.log(_.map(["[0]a.c", "[1]a.c"], propertyOfBaseArray)); // [2, 1];`,
      },
    },
  ],
};

export default propertyOf;
