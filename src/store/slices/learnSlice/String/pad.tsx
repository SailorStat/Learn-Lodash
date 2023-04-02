import React from "react";
import { RuleProps } from "@src/components/Rule";

const pad: RuleProps = {
  id: "_.pad",
  blocks: [
    {
      type: "title",
      title: { id: "_.pad-title", children: "_.pad" },
    },
    {
      type: "description",
      description: {
        id: "_.pad-description",
        children: (
          <>
            Принимает <b>строку, количество символов и заполняющие знаки</b>. Bозвращает <b>строку</b> указанной длины,
            в которой с начала и с конца строка заполяется указанным значением до нужной длины
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.pad-code",
        language: "ts",
        children: `console.log(_.pad(" Foo Bar ", 14, "213")); // "21 Foo Bar 213";
console.log(_.pad("-FOO---BAR-", 7)); // "-FOO---BAR-";
console.log(_.pad("_-Foo_Bar_-", 11, "_-_")); // "__foo_bar__";`,
      },
    },
  ],
};

export default pad;
