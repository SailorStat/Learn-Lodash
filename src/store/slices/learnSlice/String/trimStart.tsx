import React from "react";
import { RuleProps } from "@src/components/Rule";

const trimStart: RuleProps = {
  id: "_.trimStart",
  blocks: [
    {
      type: "title",
      title: { id: "_.trimStart-title", children: "_.trimStart" },
    },
    {
      type: "description",
      description: {
        id: "_.trimStart-description",
        children: (
          <>
            Принимает <b>строку и подстроку</b>. Bозвращает <b>строку</b>, в которой удалены начальные пробелы или
            указанные символы
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.trimStart-code",
        language: "ts",
        children: `console.log(_.trimStart("  Foo Bar  ")); // "Foo Bar  ";
console.log(_.trimStart(" -FOO---BAR- ", "-")); // " -FOO---BAR- ";
console.log(_.trimStart("_ _Foo_Bar__ ", "_ ")); // "Foo_Bar__ ";`,
      },
    },
  ],
};

export default trimStart;
