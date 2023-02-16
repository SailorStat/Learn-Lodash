import React from "react";
import { RuleProps } from "@src/components/Rule";

const flatMapDeep: RuleProps = {
  id: "_.flatMapDeep",
  blocks: [
    {
      type: "title",
      title: { id: "_.flatMapDeep-title", children: "_.flatMapDeep" },
    },
    {
      type: "description",
      description: {
        id: "_.flatMapDeep-description",
        children: (
          <>
            Принимает <b>массив и функцию преобразования</b>, возвращает <b>сглаженный на все уровни массив</b>,
            содержащий все значения после преобразования
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.flatMapDeep-code",
        language: "ts",
        children: `const baseArray = [1, 5, 42, 4];

const transformation = (n: number) => [n, [[[{ a: 2 * n }]]]];

const flatedMapDeep = _.flatMapDeep(baseArray, transformation);
console.log(flatedMapDeep); // [1, { a: 2 }, 5, { a: 10 }, 42, { a: 84 }, 4, { a: 8 }];`,
      },
    },
  ],
};

export default flatMapDeep;
