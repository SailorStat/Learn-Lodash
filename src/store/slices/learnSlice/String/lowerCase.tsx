import React from "react";
import { RuleProps } from "@src/components/Rule";

const lowerCase: RuleProps = {
  id: "_.lowerCase",
  blocks: [
    {
      type: "title",
      title: { id: "_.lowerCase-title", children: "_.lowerCase" },
    },
    {
      type: "description",
      description: {
        id: "_.lowerCase-description",
        children: (
          <>
            Принимает <b>строку</b>. Bозвращает <b>строку</b>, в которой все буквы маленькие, знаки удалены
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.lowerCase-code",
        language: "ts",
        children: `console.log(_.lowerCase("Foo Bar")); // "foo bar";
console.log(_.lowerCase("FOO---BAR")); // "foo bar";
console.log(_.lowerCase("__foo_bar__")); // "foo bar";`,
      },
    },
  ],
};

export default lowerCase;
