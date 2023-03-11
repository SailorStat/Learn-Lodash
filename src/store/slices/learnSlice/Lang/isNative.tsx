import React from "react";
import { RuleProps } from "@src/components/Rule";

const isNatived: RuleProps = {
  id: "_.isNatived",
  blocks: [
    {
      type: "title",
      title: { id: "_.isNatived-title", children: "_.isNatived" },
    },
    {
      type: "description",
      description: {
        id: "_.isNatived-description",
        children: (
          <>
            Принимает <b>значение</b>, возвращает <b>true</b>, если значение является нативной функцией
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.isNatived-code",
        language: "ts",
        children: `const isNatived = _.isNative(Array.prototype.push);
console.log(isNatived); // true;

const isNatived2 = _.isNative(_);
console.log(isNatived2); // false;`,
      },
    },
  ],
};

export default isNatived;
