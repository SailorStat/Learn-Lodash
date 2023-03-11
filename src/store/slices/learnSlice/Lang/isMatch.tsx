import React from "react";
import { RuleProps } from "@src/components/Rule";

const isMatch: RuleProps = {
  id: "_.isMatch",
  blocks: [
    {
      type: "title",
      title: { id: "_.isMatch-title", children: "_.isMatch" },
    },
    {
      type: "description",
      description: {
        id: "_.isMatch-description",
        children: (
          <>
            Принимает <b>объект и искомый объект</b>, возвращает <b>true</b>, если объект рекурсивной проверкой содержит
            искомый объект
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.isMatch-code",
        language: "ts",
        children: `const baseObject = { a: { b: 3 }, c: 4 };
const isMatched = _.isMatch(baseObject, { a: { b: 3 } });
console.log(isMatched); // true;

const isMatched2 = _.isMatch(baseObject,{ a: { b: 5 } });
console.log(isMatched2); // false;`,
      },
    },
  ],
};

export default isMatch;
