import React from "react";
import { RuleProps } from "@src/components/Rule";

const uniqWith: RuleProps = {
  id: "_.uniqWith",
  blocks: [
    {
      type: "title",
      title: { id: "_.uniqWith-title", children: "_.uniqWith" },
    },
    {
      type: "description",
      description: {
        id: "_.uniqWith-description",
        children: (
          <>
            Принимает <b>массив и функцию сравнения</b>, возвращает <b>массив</b> уникальных значений, для которых
            сравнение с предыдущими элементами вернуло <b>false</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.uniqWith-code",
        language: "ts",
        children: `const baseArray = [{ a: 1 }, { a: 5 }, { a: 2 }, { a: 1 }, { a: 5 }, { a: 3 }];

const unitedWhile = _.uniqWith(baseArray, (a, b) => a.a % 3 === b.a % 3);
console.log(unitedWhile); // [{ a: 1 }, { a: 5 }, { a: 3 }];`,
      },
    },
  ],
};

export default uniqWith;
