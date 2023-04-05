import React from "react";
import { RuleProps } from "@src/components/Rule";

const stubTrue: RuleProps = {
  id: "_.stubTrue",
  blocks: [
    {
      type: "title",
      title: { id: "_.stubTrue-title", children: "_.stubTrue" },
    },
    {
      type: "description",
      description: {
        id: "_.stubTrue-description",
        children: (
          <>
            Bозвращает <b>true</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.stubTrue-code",
        language: "ts",
        children: `console.log(_.stubTrue()); // true;`,
      },
    },
  ],
};

export default stubTrue;
