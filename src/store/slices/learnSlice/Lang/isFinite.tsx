import React from "react";
import { RuleProps } from "@src/components/Rule";

const isFinite: RuleProps = {
  id: "_.isFinite",
  blocks: [
    {
      type: "title",
      title: { id: "_.isFinite-title", children: "_.isFinite" },
    },
    {
      type: "description",
      description: {
        id: "_.isFinite-description",
        children: (
          <>
            Принимает <b>значениe</b>, возвращает <b>true</b> для значений, являющихся конечным числом
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.isFinite-code",
        language: "ts",
        children: `const isFin = _.isFinite(3);
console.log(isFin); // true;

const isFin2 = _.isFinite(Infinity);
console.log(isFin2); // false;

const isFin3 = _.isFinite("3");
console.log(isFin3); // false;`,
      },
    },
  ],
};

export default isFinite;
