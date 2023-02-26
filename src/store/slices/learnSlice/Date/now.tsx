import React from "react";
import { RuleProps } from "@src/components/Rule";

const now: RuleProps = {
  id: "_.now",
  blocks: [
    {
      type: "title",
      title: { id: "_.now-title", children: "_.now" },
    },
    {
      type: "description",
      description: {
        id: "_.now-description",
        children: (
          <>
            Bозвращает <b>число</b> с количеством миллисекунд после 1 января 1970 00:00:00
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.now-code",
        language: "ts",
        children: `const milliseconds = _.now();
console.log(milliseconds); // 1677419632443;`,
      },
    },
  ],
};

export default now;
