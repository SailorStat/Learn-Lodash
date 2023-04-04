import React from "react";
import { RuleProps } from "@src/components/Rule";

const noop: RuleProps = {
  id: "_.noop",
  blocks: [
    {
      type: "title",
      title: { id: "_.noop-title", children: "_.noop" },
    },
    {
      type: "description",
      description: {
        id: "_.noop-description",
        children: (
          <>
            Возвращает <b>undefined</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.noop-code",
        language: "ts",
        children: `console.log(_.noop()); // undefined;`,
      },
    },
  ],
};

export default noop;
