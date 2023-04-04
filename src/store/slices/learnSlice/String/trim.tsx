import React from "react";
import { RuleProps } from "@src/components/Rule";

const trim: RuleProps = {
  id: "_.trim",
  blocks: [
    {
      type: "title",
      title: { id: "_.trim-title", children: "_.trim" },
    },
    {
      type: "description",
      description: {
        id: "_.trim-description",
        children: (
          <>
            Принимает <b>строку и подстроку</b>. Bозвращает <b>строку</b>, в которой удалены начальные и кочечные
            пробелы или указанные символы
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.trim-code",
        language: "ts",
        children: `console.log(_.trim("  Foo Bar  ")); // "Foo Bar";
console.log(_.trim(" -FOO---BAR- ", "-")); // "-FOO---BAR-";
console.log(_.trim("_ _Foo_Bar__ ", "_ ")); // "Foo_Bar";`,
      },
    },
  ],
};

export default trim;
