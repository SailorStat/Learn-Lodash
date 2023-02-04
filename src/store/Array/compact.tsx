import React from "react";

import { RuleProps } from "../../components/Rule";

const compact: RuleProps = {
  id: "_.compact",
  blocks: [
    {
      type: "title",
      title: { id: "_.compact-title", children: "_.compact" },
    },
    {
      type: "description",
      description: {
        id: "_.compact-description",
        children: (
          <>
            Принимает <b>массив</b>, возвращает только <b>значения == true</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.compact-code",
        language: "ts",
        children: `const baseArray = [0, 1, true, false, "", "0", null];

const compacted = _.compact(baseArray);
console.log(compacted); // [1, true, "0"];`,
      },
    },
  ],
};

export default compact;
