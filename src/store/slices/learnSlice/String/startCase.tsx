import React from "react";
import { RuleProps } from "@src/components/Rule";

const startCase: RuleProps = {
  id: "_.startCase",
  blocks: [
    {
      type: "title",
      title: { id: "_.startCase-title", children: "_.startCase" },
    },
    {
      type: "description",
      description: {
        id: "_.startCase-description",
        children: (
          <>
            Принимает <b>строку</b>. Bозвращает <b>строку</b>, в которой удалены все знаки, слова начинаются с
            заглавных, пропуски между словами заменяет пробел
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.startCase-code",
        language: "ts",
        children: `console.log(_.startCase("Foo, Bar")); // "Foo Bar";
console.log(_.startCase("--foo-bar--")); // "Foo Bar";
console.log(_.startCase("  FOO BAR  ")); // "FOO BAR";`,
      },
    },
  ],
};

export default startCase;
