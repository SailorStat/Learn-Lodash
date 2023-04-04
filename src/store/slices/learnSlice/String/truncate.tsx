import React from "react";
import { RuleProps } from "@src/components/Rule";

const truncate: RuleProps = {
  id: "_.truncate",
  blocks: [
    {
      type: "title",
      title: { id: "_.truncate-title", children: "_.truncate" },
    },
    {
      type: "description",
      description: {
        id: "_.truncate-description",
        children: (
          <>
            Принимает <b>строку и опции</b>. Bозвращает <b>строку</b>, в которой будет заменён конец строки
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.truncate-code",
        language: "ts",
        children: `const truncated = _.truncate("hi-diddly-ho there, neighborino");
console.log(truncated); // "hi-diddly-ho there, neighbo...";

const truncated2 = _.truncate("hi-diddly-ho there, neighborino", {
  length: 24,
  separator: " ",
});
console.log(truncated2); // "hi-diddly-ho there,...";

const truncated3 = _.truncate("hi-diddly-ho there, neighborino", {
  length: 24,
  separator: /,? +/,
});
console.log(truncated3); // "hi-diddly-ho there...";

const truncated4 = _.truncate("hi-diddly-ho there, neighborino", {
  omission: " [...]",
});
console.log(truncated4); // "hi-diddly-ho there, neig [...]";`,
      },
    },
  ],
};

export default truncate;
