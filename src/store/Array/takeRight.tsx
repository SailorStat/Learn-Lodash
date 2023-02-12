import React from "react";
import { RuleProps } from "@src/components/Rule";

const takeRight: RuleProps = {
  id: "_.takeRight",
  blocks: [
    {
      type: "title",
      title: { id: "_.takeRight-title", children: "_.takeRight" },
    },
    {
      type: "description",
      description: {
        id: "_.takeRight-description",
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
        id: "_.takeRight-code",
        language: "ts",
        children: `const baseArray = [
  { a: 3, b: 1 },
  { a: 0, b: 5 },
  { a: 3, b: 2 },
  { a: 4, b: 1 },
];

const taked = _.takeRight(baseArray);
console.log(taked); // [{ a: 4, b: 1 }];

const takedTwo = _.takeRight(baseArray, 2);
console.log(takedTwo); // [{ a: 3, b: 2 }, { a: 4, b: 1 }];`,
      },
    },
  ],
};

export default takeRight;
