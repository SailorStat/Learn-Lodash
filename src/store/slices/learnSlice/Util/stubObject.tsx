import React from "react";
import { RuleProps } from "@src/components/Rule";

const stubObject: RuleProps = {
  id: "_.stubObject",
  blocks: [
    {
      type: "title",
      title: { id: "_.stubObject-title", children: "_.stubObject" },
    },
    {
      type: "description",
      description: {
        id: "_.stubObject-description",
        children: (
          <>
            Bозвращает <b>новый пустой объект</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.stubObject-code",
        language: "ts",
        children: `console.log(_.stubObject()); // [];`,
      },
    },
  ],
};

export default stubObject;
