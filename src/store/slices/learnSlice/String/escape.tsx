import React from "react";
import { RuleProps } from "@src/components/Rule";

const escape: RuleProps = {
  id: "_.escape",
  blocks: [
    {
      type: "title",
      title: { id: "_.escape-title", children: "_.escape" },
    },
    {
      type: "description",
      description: {
        id: "_.escape-description",
        children: (
          <>
            Принимает <b>строку</b>. Bозвращает <b>строку</b>, в которой символы заменяются с целью корректного
            отображения html
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.escape-code",
        language: "ts",
        children: `const escaped = _.escape("fred, barney, & pebbles");
console.log(escaped); // "fred, barney, &amp; pebbles";`,
      },
    },
  ],
};

export default escape;
