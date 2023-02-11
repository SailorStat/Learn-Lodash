import React from "react";
import Link from "@src/components/common/Link";
import Warning from "@src/components/common/Warning";
import { RuleProps } from "@src/components/Rule";

const pullAllWith: RuleProps = {
  id: "_.pullAllWith",
  blocks: [
    {
      type: "title",
      title: { id: "_.pullAllWith-title", children: "_.pullAllWith" },
    },
    {
      type: "description",
      description: {
        id: "_.pullAllWith-description",
        children: (
          <>
            Принимает <b>2 массива и функцию сравнения</b>, возвращает <b>1-ый массив без значений</b>, для которых
            функция сравнения со значениями 2-го массива возвращает <b>true</b>
            <Warning>Мутирует исходный массив</Warning>
            <div>
              Для исключения значений без мутации рекомендуется использовать{" "}
              <Link href="#_.differenceWith">_.differenceWith</Link>
            </div>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.pullAllWith-code",
        language: "ts",
        children: `const baseArray = [
  { a: 3, b: 1 },
  { a: 0, b: 5 },
  { a: 3, b: 2 },
  { a: 4, b: 1 },
];

const pulledAllWith = _.pullAllWith(baseArray, [{ y: 3 }, { y: 1 }, { y: 0 }], (a, y) => a.a === y.y);
console.log(pulledAllWith); // [{ a: 4, b: 1 }];
console.log(baseArray); // [{ a: 4, b: 1 }];`,
      },
    },
  ],
};

export default pullAllWith;
