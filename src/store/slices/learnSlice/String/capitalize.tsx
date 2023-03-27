import React from "react";
import { RuleProps } from "@src/components/Rule";

const capitalize: RuleProps = {
  id: "_.capitalize",
  blocks: [
    {
      type: "title",
      title: { id: "_.capitalize-title", children: "_.capitalize" },
    },
    {
      type: "description",
      description: {
        id: "_.capitalize-description",
        children: (
          <>
            Принимает <b>строку</b>. Bозвращает <b>строку</b>, в которой первый символ с большой буквы, остальные с
            маленькой
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.capitalize-code",
        language: "ts",
        children: `console.log(_.capitalize("Foo Bar")); // "fooBar";
console.log(_.capitalize("--foo-bar--")); // "--foo-bar--";
console.log(_.capitalize("__foo_bar__")); // "__foo_bar__";`,
      },
    },
  ],
};

export default capitalize;
