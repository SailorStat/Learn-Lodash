import React from "react";
import { RuleProps } from "@src/components/Rule";

const isTypedArray: RuleProps = {
  id: "_.isTypedArray",
  blocks: [
    {
      type: "title",
      title: { id: "_.isTypedArray-title", children: "_.isTypedArray" },
    },
    {
      type: "description",
      description: {
        id: "_.isTypedArray-description",
        children: (
          <>
            Принимает <b>значениe</b>, возвращает <b>true</b> для значений, являющихся типизированным массивом
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.isTypedArray-code",
        language: "ts",
        children: `const isTypedArr = _.isTypedArray(new Uint8Array);
console.log(isTypedArr); // false;

const isTypedArr2 = _.isTypedArray([]);
console.log(isTypedArr2); // true;`,
      },
    },
  ],
};

export default isTypedArray;
