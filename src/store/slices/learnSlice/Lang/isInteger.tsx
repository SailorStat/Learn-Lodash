import React from "react";
import { RuleProps } from "@src/components/Rule";

const isInteger: RuleProps = {
  id: "_.isInteger",
  blocks: [
    {
      type: "title",
      title: { id: "_.isInteger-title", children: "_.isInteger" },
    },
    {
      type: "description",
      description: {
        id: "_.isInteger-description",
        children: (
          <>
            Принимает <b>значениe</b>, возвращает <b>true</b> для значений, являющихся целым числом
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.isInteger-code",
        language: "ts",
        children: `const isInt = _.isInteger(3);
console.log(isInt); // true;

const isInt2 = _.isInteger("3");
console.log(isInt2); // false;`,
      },
    },
  ],
};

export default isInteger;
