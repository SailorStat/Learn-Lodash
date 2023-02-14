import React from "react";
import { RuleProps } from "@src/components/Rule";

const xorWith: RuleProps = {
  id: "_.xorWith",
  blocks: [
    {
      type: "title",
      title: { id: "_.xorWith-title", children: "_.xorWith" },
    },
    {
      type: "description",
      description: {
        id: "_.xorWith-description",
        children: (
          <>
            Принимает <b>массивы и функцию сравнения</b>, возвращает <b>массив</b> уникальных значений, для которых
            сравнение с элементами других массивов вернуло <b>false</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.xorWith-code",
        language: "ts",
        children: `const baseArray = [{ a: 1 }, { a: 5 }, { a: 2 }, { a: 1 }];
const baseArray2 = [{ a: 1 }, { a: 3 }, { a: 7 }, { a: 8 }];

const xoredWith = _.xorWith(baseArray, baseArray2, (a, b) => a.a % 4 === b.a % 4);
console.log(xoredWith); // [{ a: 2 }, { a: 3 }, { a: 8 }];`,
      },
    },
  ],
};

export default xorWith;
