import React from "react";
import { RuleProps } from "@src/components/Rule";

const upperFirst: RuleProps = {
  id: "_.upperFirst",
  blocks: [
    {
      type: "title",
      title: { id: "_.upperFirst-title", children: "_.upperFirst" },
    },
    {
      type: "description",
      description: {
        id: "_.upperFirst-description",
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
        id: "_.upperFirst-code",
        language: "ts",
        children: `console.log(_.upperFirst("foo bar")); // "Foo bar";
console.log(_.upperFirst("-foo---BAR-")); // "-foo---BAR-";
console.log(_.upperFirst("__foo_bar__")); // "__foo_bar__";`,
      },
    },
  ],
};

export default upperFirst;
