import React from "react";
import { RuleProps } from "@src/components/Rule";

const snakeCase: RuleProps = {
  id: "_.snakeCase",
  blocks: [
    {
      type: "title",
      title: { id: "_.snakeCase-title", children: "_.snakeCase" },
    },
    {
      type: "description",
      description: {
        id: "_.snakeCase-description",
        children: (
          <>
            Принимает <b>строку</b>. Bозвращает <b>строку</b>, в которой все буквы маленькие, а пропуски между словами
            заменяет андерлайн
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.snakeCase-code",
        language: "ts",
        children: `console.log(_.snakeCase("Foo Bar")); // "foo_bar";
console.log(_.snakeCase("--foo-bar--")); // "foo_bar";
console.log(_.snakeCase("  FOO BAR  ")); // foo_bar";`,
      },
    },
  ],
};

export default snakeCase;
