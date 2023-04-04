import React from "react";
import { RuleProps } from "@src/components/Rule";

const identity: RuleProps = {
  id: "_.identity",
  blocks: [
    {
      type: "title",
      title: { id: "_.identity-title", children: "_.identity" },
    },
    {
      type: "description",
      description: {
        id: "_.identity-description",
        children: (
          <>
            Принимает <b>значение</b>. Bозвращает <b>значение</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.identity-code",
        language: "ts",
        children: `console.log(_.identity(3)); // 3;
console.log(_.identity({ a: 3 })); // { a: 3 }`,
      },
    },
  ],
};

export default identity;
