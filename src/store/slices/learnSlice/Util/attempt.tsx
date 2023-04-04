import React from "react";
import { RuleProps } from "@src/components/Rule";

const attempt: RuleProps = {
  id: "_.attempt",
  blocks: [
    {
      type: "title",
      title: { id: "_.attempt-title", children: "_.attempt" },
    },
    {
      type: "description",
      description: {
        id: "_.attempt-description",
        children: (
          <>
            Принимает <b>функцию и аргументы</b>. Bозвращает <b>результат или объект ошибки</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.attempt-code",
        language: "ts",
        children: `const elements = _.attempt(document.querySelectorAll, ">_>");
  
if (_.isError(elements)) {
  elements = [];
}`,
      },
    },
  ],
};

export default attempt;
