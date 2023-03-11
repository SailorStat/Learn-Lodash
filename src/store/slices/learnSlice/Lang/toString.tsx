import React from "react";
import { RuleProps } from "@src/components/Rule";

const toString: RuleProps = {
  id: "_.toString",
  blocks: [
    {
      type: "title",
      title: { id: "_.toString-title", children: "_.toString" },
    },
    {
      type: "description",
      description: {
        id: "_.toString-description",
        children: (
          <>
            Принимает <b>значение</b>, возвращает <b>строку</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.toString-code",
        language: "ts",
        children: `const string = _.toString(["1", "3"]);
console.log(string); // "1,3";

const string2 = _.toString(-0);
console.log(string2); // "-0";`,
      },
    },
  ],
};

export default toString;
