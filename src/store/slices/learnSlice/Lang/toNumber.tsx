import React from "react";
import { RuleProps } from "@src/components/Rule";

const toNumber: RuleProps = {
  id: "_.toNumber",
  blocks: [
    {
      type: "title",
      title: { id: "_.toNumber-title", children: "_.toNumber" },
    },
    {
      type: "description",
      description: {
        id: "_.toNumber-description",
        children: (
          <>
            Принимает <b>значение</b>, возвращает <b>число</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.toNumber-code",
        language: "ts",
        children: `const number = _.toNumber(1);
console.log(number); // 1;

const number2 = _.toNumber("3.2");
console.log(number2); // 3;`,
      },
    },
  ],
};

export default toNumber;
