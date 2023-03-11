import React from "react";
import { RuleProps } from "@src/components/Rule";

const toArray: RuleProps = {
  id: "_.toArray",
  blocks: [
    {
      type: "title",
      title: { id: "_.toArray-title", children: "_.toArray" },
    },
    {
      type: "description",
      description: {
        id: "_.toArray-description",
        children: (
          <>
            Принимает <b>значение</b>, возвращает <b>массив подзначений или пустой массив</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.toArray-code",
        language: "ts",
        children: `const array = _.toArray({ a: { b: 2 }, c: 3 });
console.log(array); // [{ b: 2 }, 3];

const array2 = _.toArray("qwer");
console.log(array2); // ["q", "w", "e", "r"];`,
      },
    },
  ],
};

export default toArray;
