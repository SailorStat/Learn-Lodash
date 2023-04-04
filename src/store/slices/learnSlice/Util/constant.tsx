import React from "react";
import { RuleProps } from "@src/components/Rule";

const constant: RuleProps = {
  id: "_.constant",
  blocks: [
    {
      type: "title",
      title: { id: "_.constant-title", children: "_.constant" },
    },
    {
      type: "description",
      description: {
        id: "_.constant-description",
        children: (
          <>
            Принимает <b>значение</b>. Bозвращает <b>функцию</b>, которая возвращает значение
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.constant-code",
        language: "ts",
        children: `console.log(_.constant({ a: 1 })()); // { a: 1 };`,
      },
    },
  ],
};

export default constant;
