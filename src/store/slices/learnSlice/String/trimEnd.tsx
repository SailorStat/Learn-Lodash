import React from "react";
import { RuleProps } from "@src/components/Rule";

const trimEnd: RuleProps = {
  id: "_.trimEnd",
  blocks: [
    {
      type: "title",
      title: { id: "_.trimEnd-title", children: "_.trimEnd" },
    },
    {
      type: "description",
      description: {
        id: "_.trimEnd-description",
        children: (
          <>
            Принимает <b>строку и подстроку</b>. Bозвращает <b>строку</b>, в которой удалены кочечные пробелы или
            указанные символы
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.trimEnd-code",
        language: "ts",
        children: `console.log(_.trimEnd("  Foo Bar  ")); // "Foo Bar";
console.log(_.trimEnd(" -FOO---BAR- ", "-")); // "-FOO---BAR-";
console.log(_.trimEnd("_ _Foo_Bar__ ", "_ ")); // "Foo_Bar";`,
      },
    },
  ],
};

export default trimEnd;
