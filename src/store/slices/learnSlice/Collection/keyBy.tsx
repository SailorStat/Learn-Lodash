import React from "react";
import { RuleProps } from "@src/components/Rule";

const keyBy: RuleProps = {
  id: "_.keyBy",
  blocks: [
    {
      type: "title",
      title: { id: "_.keyBy-title", children: "_.keyBy" },
    },
    {
      type: "description",
      description: {
        id: "_.keyBy-description",
        children: (
          <>
            Принимает <b>массив и функцию преобразования или свойсво</b>, возвращает <b>объект</b>, где ключ -
            уникальное значение после преобразования или получения значения по свойству, а значение - элемент, на
            котором производилось преобразование
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.keyBy-code",
        language: "ts",
        children: `const baseArray = [
  { a: 1, b: 3 },
  { a: 1, b: 2 },
  { a: 4, b: 5 },
  { a: 4, b: 6 },
];

const keys = _.keyBy(baseArray, (el) => el.b);
console.log(keys); // {
//   2: { a: 1, b: 2 },
//   3: { a: 1, b: 3 },
//   5: { a: 4, b: 5 },
//   6: { a: 4, b: 6 },
// };

const keys2 = _.keyBy(baseArray, "b");
console.log(keys2); // {
//   2: { a: 1, b: 2 },
//   3: { a: 1, b: 3 },
//   5: { a: 4, b: 5 },
//   6: { a: 4, b: 6 },
// };`,
      },
    },
  ],
};

export default keyBy;
