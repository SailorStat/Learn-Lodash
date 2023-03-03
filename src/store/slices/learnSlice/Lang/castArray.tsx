import React from "react";
import { RuleProps } from "@src/components/Rule";

const castArray: RuleProps = {
  id: "_.castArray",
  blocks: [
    {
      type: "title",
      title: { id: "_.castArray-title", children: "_.castArray" },
    },
    {
      type: "description",
      description: {
        id: "_.castArray-description",
        children: (
          <>
            Принимает <b>значение</b>, возвращает <b>массив</b>. Если переданное значение было массивом, то вернёт его.
            В остальных случаях поместит значение в массив
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.castArray-code",
        language: "ts",
        children: `const arrayNull = _.castArray(null);
const arrayObject = _.castArray({ a: 1 });
const arrayArray = _.castArray([null]);

console.log(arrayNull); // [null];
console.log(arrayObject); // [{ a: 1 }];
console.log(arrayArray); // [null];`,
      },
    },
  ],
};

export default castArray;
