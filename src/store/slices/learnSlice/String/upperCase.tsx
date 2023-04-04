import React from "react";
import { RuleProps } from "@src/components/Rule";

const upperCase: RuleProps = {
  id: "_.upperCase",
  blocks: [
    {
      type: "title",
      title: { id: "_.upperCase-title", children: "_.upperCase" },
    },
    {
      type: "description",
      description: {
        id: "_.upperCase-description",
        children: (
          <>
            Принимает <b>строку</b>. Bозвращает <b>строку</b>, в которой все буквы большие, знаки удалены
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.upperCase-code",
        language: "ts",
        children: `console.log(_.upperCase("Foo Bar")); // "FOO BAR";
console.log(_.upperCase("FOO---BAR")); // "FOO BAR";
console.log(_.upperCase("__foo_bar__")); // "FOO BAR";`,
      },
    },
  ],
};

export default upperCase;
