import React from "react";
import { RuleProps } from "@src/components/Rule";

const toInteger: RuleProps = {
  id: "_.toInteger",
  blocks: [
    {
      type: "title",
      title: { id: "_.toInteger-title", children: "_.toInteger" },
    },
    {
      type: "description",
      description: {
        id: "_.toInteger-description",
        children: (
          <>
            Принимает <b>значение</b>, возвращает <b>целое число</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.toInteger-code",
        language: "ts",
        children: `const integer = _.toInteger(1);
console.log(integer); // 1;

const integer2 = _.toInteger("3.2");
console.log(integer2); // 3;`,
      },
    },
  ],
};

export default toInteger;
