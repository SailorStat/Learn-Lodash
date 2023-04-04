import React from "react";
import { RuleProps } from "@src/components/Rule";

const toUpper: RuleProps = {
  id: "_.toUpper",
  blocks: [
    {
      type: "title",
      title: { id: "_.toUpper-title", children: "_.toUpper" },
    },
    {
      type: "description",
      description: {
        id: "_.toUpper-description",
        children: (
          <>
            Принимает <b>строку</b>. Bозвращает <b>строку</b>, в которой маленькие символы заменены на большие
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.toUpper-code",
        language: "ts",
        children: `console.log(_.toUpper("Foo Bar")); // "FOO BAR";
console.log(_.toUpper("-FOO---BAR-")); // "-FOO---BAR-";
console.log(_.toUpper("__Foo_Bar__")); // "__FOO_BAR__";`,
      },
    },
  ],
};

export default toUpper;
