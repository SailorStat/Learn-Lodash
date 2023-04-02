import React from "react";
import { RuleProps } from "@src/components/Rule";

const padStart: RuleProps = {
  id: "_.padStart",
  blocks: [
    {
      type: "title",
      title: { id: "_.padStart-title", children: "_.padStart" },
    },
    {
      type: "description",
      description: {
        id: "_.padStart-description",
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
        id: "_.padStart-code",
        language: "ts",
        children: `console.log(_.padStart(" Foo Bar ", 14, "213")); // "21321 Foo Bar ";
console.log(_.padStart("-FOO---BAR-", 7)); // "-FOO---BAR-";
console.log(_.padStart("_-Foo_Bar_-", 13, "_-_")); // "_-_-Foo_Bar_-";`,
      },
    },
  ],
};

export default padStart;
