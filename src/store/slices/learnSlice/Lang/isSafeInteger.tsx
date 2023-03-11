import React from "react";
import { RuleProps } from "@src/components/Rule";

const isSafeInteger: RuleProps = {
  id: "_.isSafeInteger",
  blocks: [
    {
      type: "title",
      title: { id: "_.isSafeInteger-title", children: "_.isSafeInteger" },
    },
    {
      type: "description",
      description: {
        id: "_.isSafeInteger-description",
        children: (
          <>
            Принимает <b>значениe</b>, возвращает <b>true</b>, если число, которое может быть безопасно сохранено, без
            преобразования к другому после сохранения
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.isSafeInteger-code",
        language: "ts",
        children: `const isSafed = _.isSafeInteger(3);
console.log(isSafed); // true;

const isSafed2 = _.isSafeInteger(2 ** 54);
console.log(isSafed2); // false;`,
      },
    },
  ],
};

export default isSafeInteger;
