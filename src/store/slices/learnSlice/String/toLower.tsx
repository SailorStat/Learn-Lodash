import React from "react";
import { RuleProps } from "@src/components/Rule";

const toLower: RuleProps = {
  id: "_.toLower",
  blocks: [
    {
      type: "title",
      title: { id: "_.toLower-title", children: "_.toLower" },
    },
    {
      type: "description",
      description: {
        id: "_.toLower-description",
        children: (
          <>
            Принимает <b>строку</b>. Bозвращает <b>строку</b>, в которой большие символы заменены на маленькие
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.toLower-code",
        language: "ts",
        children: `console.log(_.toLower("Foo Bar")); // "foo Bar";
console.log(_.toLower("-FOO---BAR-")); // "-foo---bar-";
console.log(_.toLower("__Foo_Bar__")); // "__foo_bar__";`,
      },
    },
  ],
};

export default toLower;
