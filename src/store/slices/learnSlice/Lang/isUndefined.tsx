import React from "react";
import { RuleProps } from "@src/components/Rule";

const isUndefined: RuleProps = {
  id: "_.isUndefined",
  blocks: [
    {
      type: "title",
      title: { id: "_.isUndefined-title", children: "_.isUndefined" },
    },
    {
      type: "description",
      description: {
        id: "_.isUndefined-description",
        children: (
          <>
            Принимает <b>значениe</b>, возвращает <b>true</b> для значений, являющихся undefined
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.isUndefined-code",
        language: "ts",
        children: `const isUndef = _.isUndefined(1);
console.log(isUndef); // false;

const isUndef2 = _.isUndefined(undefined);
console.log(isUndef); // true;`,
      },
    },
  ],
};

export default isUndefined;
