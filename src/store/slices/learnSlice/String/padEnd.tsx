import React from "react";
import { RuleProps } from "@src/components/Rule";

const padEnd: RuleProps = {
  id: "_.padEnd",
  blocks: [
    {
      type: "title",
      title: { id: "_.padEnd-title", children: "_.padEnd" },
    },
    {
      type: "description",
      description: {
        id: "_.padEnd-description",
        children: (
          <>
            Принимает <b>строку, количество символов и заполняющие знаки</b>. Bозвращает <b>строку</b> указанной длины,
            в которой с конца строка заполяется указанным значением до нужной длины
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.padEnd-code",
        language: "ts",
        children: `console.log(_.padEnd(" Foo Bar ", 14, "213")); // " Foo Bar 21321";
console.log(_.padEnd("-FOO---BAR-", 7)); // "-FOO---BAR-";
console.log(_.padEnd("_-Foo_Bar_-", 13, "_-_")); // "_-Foo_Bar_-_-";`,
      },
    },
  ],
};

export default padEnd;
