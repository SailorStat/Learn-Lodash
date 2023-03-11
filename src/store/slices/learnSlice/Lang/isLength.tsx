import React from "react";
import { RuleProps } from "@src/components/Rule";

const isLength: RuleProps = {
  id: "_.isLength",
  blocks: [
    {
      type: "title",
      title: { id: "_.isLength-title", children: "_.isLength" },
    },
    {
      type: "description",
      description: {
        id: "_.isLength-description",
        children: (
          <>
            Принимает <b>значениe</b>, возвращает <b>true</b> для значений, являющихся натуральным числом
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.isLength-code",
        language: "ts",
        children: `const isLen = _.isLength(3);
console.log(isLen); // true;

const isLen2 = _.isLength("3");
console.log(isLen2); // false;`,
      },
    },
  ],
};

export default isLength;
