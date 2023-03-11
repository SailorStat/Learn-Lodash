import React from "react";
import { RuleProps } from "@src/components/Rule";

const isString: RuleProps = {
  id: "_.isString",
  blocks: [
    {
      type: "title",
      title: { id: "_.isString-title", children: "_.isString" },
    },
    {
      type: "description",
      description: {
        id: "_.isString-description",
        children: (
          <>
            Принимает <b>значениe</b>, возвращает <b>true</b> для значений, являющихся строками
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.isString-code",
        language: "ts",
        children: `const isStr = _.isString(3);
console.log(isStr); // false;

const isStr2 = _.isString("3");
console.log(isStr2); // true;`,
      },
    },
  ],
};

export default isString;
