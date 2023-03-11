import React from "react";
import { RuleProps } from "@src/components/Rule";

const isNumber: RuleProps = {
  id: "_.isNumber",
  blocks: [
    {
      type: "title",
      title: { id: "_.isNumber-title", children: "_.isNumber" },
    },
    {
      type: "description",
      description: {
        id: "_.isNumber-description",
        children: (
          <>
            Принимает <b>значениe</b>, возвращает <b>true</b> для значений, являющихся числом
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.isNumber-code",
        language: "ts",
        children: `const isNum = _.isNumber(3);
console.log(isNum); // true;

const isNum2 = _.isNumber("3");
console.log(isNum2); // false;`,
      },
    },
  ],
};

export default isNumber;
