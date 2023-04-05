import React from "react";
import { RuleProps } from "@src/components/Rule";

const stubFalse: RuleProps = {
  id: "_.stubFalse",
  blocks: [
    {
      type: "title",
      title: { id: "_.stubFalse-title", children: "_.stubFalse" },
    },
    {
      type: "description",
      description: {
        id: "_.stubFalse-description",
        children: (
          <>
            Bозвращает <b>false</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.stubFalse-code",
        language: "ts",
        children: `console.log(_.stubFalse()); // false;`,
      },
    },
  ],
};

export default stubFalse;
