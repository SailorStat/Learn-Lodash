import React from "react";
import { RuleProps } from "@src/components/Rule";

const split: RuleProps = {
  id: "_.split",
  blocks: [
    {
      type: "title",
      title: { id: "_.split-title", children: "_.split" },
    },
    {
      type: "description",
      description: {
        id: "_.split-description",
        children: (
          <>
            Принимает <b>строку, подстроку и лимит</b>. Bозвращает <b>массив</b> строк, разбитых подстрокой в исходном
            тексте
            <div>Если результатов больше, чем лимит, то вернётся только лимитированное количество</div>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.split-code",
        language: "ts",
        children: `console.log(_.split("*_*_*-*", "_", 2)); // ['*', '*'];
console.log(_.split("*_*_*-*", "_")); // ['*', '*', '*-*'];`,
      },
    },
  ],
};

export default split;
