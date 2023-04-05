import React from "react";
import { RuleProps } from "@src/components/Rule";

const stubString: RuleProps = {
  id: "_.stubString",
  blocks: [
    {
      type: "title",
      title: { id: "_.stubString-title", children: "_.stubString" },
    },
    {
      type: "description",
      description: {
        id: "_.stubString-description",
        children: (
          <>
            Bозвращает <b>пустую строку</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.stubString-code",
        language: "ts",
        children: `console.log(_.stubString()); // "";`,
      },
    },
  ],
};

export default stubString;
