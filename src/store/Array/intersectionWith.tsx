import React from "react";
import { RuleProps } from "@src/components/Rule";

const intersectionWith: RuleProps = {
  id: "_.intersectionWith",
  blocks: [
    {
      type: "title",
      title: { id: "_.intersectionWith-title", children: "_.intersectionWith" },
    },
    {
      type: "description",
      description: {
        id: "_.intersectionWith-description",
        children: (
          <>
            Принимает <b>массивs и функцию сравнения</b>, возвращает <b>массив значений</b> для которых сравнение во
            всех массивах вернуло <b>true</b> (значение и порядок берутся по первому массиву)
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.intersectionWith-code",
        language: "ts",
        children: `const baseArray = [{ a: 1 }, { a: 5 }, { a: 2 }, { a: 1 }];
const baseArray2 = [{ a: 1 }, { a: 3 }, { a: 7 }, { a: 8 }];

const intersectedWhile = _.intersectionWith(baseArray, baseArray2, (a, b) => a.a % 3 === b.a % 3);
console.log(intersectedWhile); // [{ a: 1 }, { a: 5 }];`,
      },
    },
  ],
};

export default intersectionWith;
