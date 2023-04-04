import React from "react";
import { RuleProps } from "@src/components/Rule";

const defaultTo: RuleProps = {
  id: "_.defaultTo",
  blocks: [
    {
      type: "title",
      title: { id: "_.defaultTo-title", children: "_.defaultTo" },
    },
    {
      type: "description",
      description: {
        id: "_.defaultTo-description",
        children: (
          <>
            Принимает <b>два зачения</b>. Bозвращает <b>первое значение</b>, если оно не NaN, null или undefined, иначе
            вернёт второе
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.defaultTo-code",
        language: "ts",
        children: `console.log(_.defaultTo(0, 42)); // 0;
console.log(_.defaultTo(null, 42)); // 42;`,
      },
    },
  ],
};

export default defaultTo;
