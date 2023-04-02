import React from "react";
import { RuleProps } from "@src/components/Rule";

const lowerFirst: RuleProps = {
  id: "_.lowerFirst",
  blocks: [
    {
      type: "title",
      title: { id: "_.lowerFirst-title", children: "_.lowerFirst" },
    },
    {
      type: "description",
      description: {
        id: "_.lowerFirst-description",
        children: (
          <>
            Принимает <b>строку</b>. Bозвращает <b>строку</b>, в которой первый символ маленький
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.lowerFirst-code",
        language: "ts",
        children: `console.log(_.lowerFirst("Foo Bar")); // "foo Bar";
console.log(_.lowerFirst("-FOO---BAR-")); // "-FOO---BAR-";
console.log(_.lowerFirst("__Foo_Bar__")); // "__foo_bar__";`,
      },
    },
  ],
};

export default lowerFirst;
