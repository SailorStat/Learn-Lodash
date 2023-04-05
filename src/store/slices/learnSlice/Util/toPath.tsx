import React from "react";
import { RuleProps } from "@src/components/Rule";

const toPath: RuleProps = {
  id: "_.toPath",
  blocks: [
    {
      type: "title",
      title: { id: "_.toPath-title", children: "_.toPath" },
    },
    {
      type: "description",
      description: {
        id: "_.toPath-description",
        children: (
          <>
            Принимает <b>путь</b>. Bозвращает <b>массив свойств пути</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.toPath-code",
        language: "ts",
        children: `console.log(_.toPath("a.c[2].b")); // ["a", "c", "2", "b"];
console.log(_.toPath("[0].time.hours")); // ["0", "time", "hours"];`,
      },
    },
  ],
};

export default toPath;
