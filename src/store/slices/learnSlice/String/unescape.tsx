import React from "react";
import { RuleProps } from "@src/components/Rule";

const unescape: RuleProps = {
  id: "_.unescape",
  blocks: [
    {
      type: "title",
      title: { id: "_.unescape-title", children: "_.unescape" },
    },
    {
      type: "description",
      description: {
        id: "_.unescape-description",
        children: (
          <>
            Принимает <b>строку</b>. Bозвращает <b>строку</b>, в которой html символы заменены на обычные
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.unescape-code",
        language: "ts",
        children: `console.log(_.unescape("fred, barney, &amp; pebbles")); // "fred, barney, & pebbles";
console.log(_.unescape("entities &amp;, &lt;, &gt;, &quot;, and &#39;")); // "entities &, <, >, ", and '";`,
      },
    },
  ],
};

export default unescape;
