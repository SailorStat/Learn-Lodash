import React from "react";
import { RuleProps } from "@src/components/Rule";

const noConflict: RuleProps = {
  id: "_.noConflict",
  blocks: [
    {
      type: "title",
      title: { id: "_.noConflict-title", children: "_.noConflict" },
    },
    {
      type: "description",
      description: {
        id: "_.noConflict-description",
        children: (
          <>
            Возвращает переменной предыдущее значение. Bозвращает <b>lodash</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.noConflict-code",
        language: "ts",
        children: `const lodash = _.noConflict();`,
      },
    },
  ],
};

export default noConflict;
