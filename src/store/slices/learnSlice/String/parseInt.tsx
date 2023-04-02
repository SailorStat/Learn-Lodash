import React from "react";
import { RuleProps } from "@src/components/Rule";

const parseInt: RuleProps = {
  id: "_.parseInt",
  blocks: [
    {
      type: "title",
      title: { id: "_.parseInt-title", children: "_.parseInt" },
    },
    {
      type: "description",
      description: {
        id: "_.parseInt-description",
        children: (
          <>
            Принимает <b>строку и систему счисления</b>. Bозвращает <b>число</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.parseInt-code",
        language: "ts",
        children: `console.log(_.parseInt(" 1234 ")); // "21321 Foo Bar ";
console.log(_.parseInt("-FOO---BAR-", 7)); // "-FOO---BAR-";
console.log(_.parseInt("_-Foo_Bar_-", 13, "_-_")); // "_-_-Foo_Bar_-";`,
      },
    },
  ],
};

export default parseInt;
