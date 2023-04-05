import React from "react";
import { RuleProps } from "@src/components/Rule";

const uniqueId: RuleProps = {
  id: "_.uniqueId",
  blocks: [
    {
      type: "title",
      title: { id: "_.uniqueId-title", children: "_.uniqueId" },
    },
    {
      type: "description",
      description: {
        id: "_.uniqueId-description",
        children: (
          <>
            Принимает <b>строку</b>. Bозвращает <b>строку</b>, начинающуюся с переданной строки и содержащую уникальный
            id
            <div>При каждом рендере id остаётся одинаковым</div>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.uniqueId-code",
        language: "ts",
        children: `console.log(_.uniqueId("newId_")); // "newId_1";
console.log(_.uniqueId()); // "2";`,
      },
    },
  ],
};

export default uniqueId;
