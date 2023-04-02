import React from "react";
import { RuleProps } from "@src/components/Rule";

const repeat: RuleProps = {
  id: "_.repeat",
  blocks: [
    {
      type: "title",
      title: { id: "_.repeat-title", children: "_.repeat" },
    },
    {
      type: "description",
      description: {
        id: "_.repeat-description",
        children: (
          <>
            Принимает <b>строку и количество повторений</b>. Bозвращает <b>строку</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.repeat-code",
        language: "ts",
        children: `console.log(_.repeat("*_* ", 4)); // "*_* *_* *_* *_* ";
console.log(_.repeat("*_* ", 0)); // "";`,
      },
    },
  ],
};

export default repeat;
