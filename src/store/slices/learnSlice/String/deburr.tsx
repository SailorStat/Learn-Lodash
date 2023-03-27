import React from "react";
import { RuleProps } from "@src/components/Rule";

const deburr: RuleProps = {
  id: "_.deburr",
  blocks: [
    {
      type: "title",
      title: { id: "_.deburr-title", children: "_.deburr" },
    },
    {
      type: "description",
      description: {
        id: "_.deburr-description",
        children: (
          <>
            Принимает <b>строку</b>. Bозвращает <b>строку</b>, в которой буквы с засечками заменены на латиницу и
            удалены комбинированные диакретические знаки
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.deburr-code",
        language: "ts",
        children: `console.log(_.deburr("déjà vu")); // "deja vu";`,
      },
    },
  ],
};

export default deburr;
