import React from "react";
import { RuleProps } from "@src/components/Rule";

const take: RuleProps = {
  id: "_.take",
  blocks: [
    {
      type: "title",
      title: { id: "_.take-title", children: "_.take" },
    },
    {
      type: "description",
      description: {
        id: "_.take-description",
        children: (
          <>
            Принимает <b>массив и число</b>, возвращает <b>массив</b> размером указанного числа, выкидывая лишнее с
            конца.
            <div>Если значение больше длины массива, вернётся начальный массив</div>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.take-code",
        language: "ts",
        children: `const baseArray = [
  { a: 3, b: 1 },
  { a: 0, b: 5 },
  { a: 3, b: 2 },
  { a: 4, b: 1 },
];

const taked = _.take(baseArray);
console.log(taked); // [{ a: 3, b: 1 }];

const takedTwo = _.take(baseArray, 2);
console.log(takedTwo); // [{ a: 3, b: 1 }, { a: 0, b: 5 }];`,
      },
    },
  ],
};

export default take;
