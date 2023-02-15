import React from "react";
import { RuleProps } from "@src/components/Rule";

const unionWith: RuleProps = {
  id: "_.unionWith",
  blocks: [
    {
      type: "title",
      title: { id: "_.unionWith-title", children: "_.unionWith" },
    },
    {
      type: "description",
      description: {
        id: "_.unionWith-description",
        children: (
          <>
            Принимает <b>массивы и функцию сравнения</b>, возвращает <b>массив</b> уникальных значений, для которых
            сравнение с предыдущими элементами вернуло <b>false</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.unionWith-code",
        language: "ts",
        children: `const baseArray = [{ a: 1 }, { a: 5 }, { a: 2 }, { a: 1 }];
const baseArray2 = [{ a: 1 }, { a: 3 }, { a: 7 }, { a: 8 }];

const unitedWith = _.unionWith(baseArray, baseArray2, (a, b) => a.a % 3 === b.a % 3);
console.log(unitedWith); // [{ a: 1 }, { a: 5 }, { a: 3 }];`,
      },
    },
  ],
};

export default unionWith;
