import React from "react";
import { RuleProps } from "@src/components/Rule";

const flatMap: RuleProps = {
  id: "_.flatMap",
  blocks: [
    {
      type: "title",
      title: { id: "_.flatMap-title", children: "_.flatMap" },
    },
    {
      type: "description",
      description: {
        id: "_.flatMap-description",
        children: (
          <>
            Принимает <b>массив и функцию преобразования</b>, возвращает <b>сглаженный массив</b>, содержащий все
            значения после преобразования
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.flatMap-code",
        language: "ts",
        children: `const baseArray = [1, 5, 42, 4];

const transformation = (n: number) => [n, [[[{ a: 2 * n }]]]];

const flatedMap = _.flatMap(baseArray, transformation);
console.log(flatedMap); // [1, [[[{ a: 2 }]]], 5, [[[{ a: 10 }]]], 42, [[[{ a: 84 }]]], 4, [[[{ a: 8 }]]]];`,
      },
    },
  ],
};

export default flatMap;
