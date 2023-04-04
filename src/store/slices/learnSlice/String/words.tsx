import React from "react";
import { RuleProps } from "@src/components/Rule";

const words: RuleProps = {
  id: "_.words",
  blocks: [
    {
      type: "title",
      title: { id: "_.words-title", children: "_.words" },
    },
    {
      type: "description",
      description: {
        id: "_.words-description",
        children: (
          <>
            Принимает <b>строку и паттерн</b>. Bозвращает <b>массив строк</b>, которые являются словами или результатом
            применения паттерна (если паттерн передан)
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.words-code",
        language: "ts",
        children: `console.log(_.words("fred, barney, & pebbles")); // ["fred", "barney", "pebbles"];;
console.log(_.words("fred, barney, & pebbles", /[^, ]+/g)); // ["fred", "barney", "&", "pebbles"];`,
      },
    },
  ],
};

export default words;
