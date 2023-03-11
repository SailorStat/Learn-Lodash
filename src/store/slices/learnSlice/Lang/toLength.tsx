import React from "react";
import { RuleProps } from "@src/components/Rule";

const toLength: RuleProps = {
  id: "_.toLength",
  blocks: [
    {
      type: "title",
      title: { id: "_.toLength-title", children: "_.toLength" },
    },
    {
      type: "description",
      description: {
        id: "_.toLength-description",
        children: (
          <>
            Принимает <b>значение</b>, возвращает <b>натуральное число</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.toLength-code",
        language: "ts",
        children: `const length = _.toLength(1);
console.log(length); // 1;

const length2 = _.toLength("3.2");
console.log(length2); // 3;`,
      },
    },
  ],
};

export default toLength;
