import React from "react";
import { RuleProps } from "@src/components/Rule";

const toFinite: RuleProps = {
  id: "_.toFinite",
  blocks: [
    {
      type: "title",
      title: { id: "_.toFinite-title", children: "_.toFinite" },
    },
    {
      type: "description",
      description: {
        id: "_.toFinite-description",
        children: (
          <>
            Принимает <b>значение</b>, возвращает <b>конечное число</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.toFinite-code",
        language: "ts",
        children: `const finite = _.toFinite(1);
console.log(finite); // 1;

const finite2 = _.toFinite("3.2");
console.log(finite2); // 3.2;`,
      },
    },
  ],
};

export default toFinite;
