import React from "react";
import { RuleProps } from "@src/components/Rule";

const isFunction: RuleProps = {
  id: "_.isFunction",
  blocks: [
    {
      type: "title",
      title: { id: "_.isFunction-title", children: "_.isFunction" },
    },
    {
      type: "description",
      description: {
        id: "_.isFunction-description",
        children: (
          <>
            Принимает <b>значениe</b>, возвращает <b>true</b> для значений, являющихся функцией
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.isFunction-code",
        language: "ts",
        children: `const isFunc = _.isFunction(() => {
  return 2 + 3;
});
console.log(isFunc); // true;

const isFunc2 = _.isFunction(3);
console.log(isFunc2); // false;`,
      },
    },
  ],
};

export default isFunction;
