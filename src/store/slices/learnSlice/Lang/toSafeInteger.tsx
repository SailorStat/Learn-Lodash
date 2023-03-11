import React from "react";
import { RuleProps } from "@src/components/Rule";

const toSafeInteger: RuleProps = {
  id: "_.toSafeInteger",
  blocks: [
    {
      type: "title",
      title: { id: "_.toSafeInteger-title", children: "_.toSafeInteger" },
    },
    {
      type: "description",
      description: {
        id: "_.toSafeInteger-description",
        children: (
          <>
            Принимает <b>значение</b>, возвращает <b>число с сохранением без потерь</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.toSafeInteger-code",
        language: "ts",
        children: `const safeInteger = _.toSafeInteger(1);
console.log(safeInteger); // 1;

const safeInteger2 = _.toSafeInteger(Infinity);
console.log(safeInteger2); // 9007199254740991;`,
      },
    },
  ],
};

export default toSafeInteger;
