import React from "react";
import { RuleProps } from "@src/components/Rule";

const isSymbol: RuleProps = {
  id: "_.isSymbol",
  blocks: [
    {
      type: "title",
      title: { id: "_.isSymbol-title", children: "_.isSymbol" },
    },
    {
      type: "description",
      description: {
        id: "_.isSymbol-description",
        children: (
          <>
            Принимает <b>значениe</b>, возвращает <b>true</b> для значений, являющихся символом
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.isSymbol-code",
        language: "ts",
        children: `const isSymb = _.isSymbol(Symbol.iterator);
console.log(isSymb); // false;

const isSymb2 = _.isSymbol("3");
console.log(isSymb2); // true;`,
      },
    },
  ],
};

export default isSymbol;
