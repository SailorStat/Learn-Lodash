import React from "react";
import { RuleProps } from "@src/components/Rule";

const runInContext: RuleProps = {
  id: "_.runInContext",
  blocks: [
    {
      type: "title",
      title: { id: "_.runInContext-title", children: "_.runInContext" },
    },
    {
      type: "description",
      description: {
        id: "_.runInContext-description",
        children: (
          <>
            Bозвращает <b>новый чистый контекст lodash</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.runInContext-code",
        language: "ts",
        children: `const lodash = _.runInContext();`,
      },
    },
  ],
};

export default runInContext;
