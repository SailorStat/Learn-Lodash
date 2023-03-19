import React from "react";
import { RuleProps } from "@src/components/Rule";

const mergeWith: RuleProps = {
  id: "_.mergeWith",
  blocks: [
    {
      type: "title",
      title: { id: "_.mergeWith-title", children: "_.mergeWith" },
    },
    {
      type: "description",
      description: {
        id: "_.mergeWith-description",
        children: (
          <>
            Принимает <b>объекты и функцию перобразования</b>. Возвращает <b>объект</b>, полученный в результате
            рекурсивного слияния с применением функции преобразования значений
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.mergeWith-code",
        language: "ts",
        children: `const baseObject = { a: { c: 1 }, b: 3, f: 6 };
const baseObject2 = { a: { c: 2, d: 5 }, b: 4, f: 6, g: 7 };

const transition = (oldValue, newValue) => {
  return [oldValue, newValue];
};

const mergedWith = _.mergeWith(baseObject, baseObject2, transition);
console.log(mergedWith); // {
//   a: [{ c: 1 }, { c: 2, d: 5 }],
//   b: [3, 4],
//   f: [6, 6],
//   g: [undefined, 7],
// };`,
      },
    },
  ],
};

export default mergeWith;
