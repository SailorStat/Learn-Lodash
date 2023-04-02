import React from "react";
import { RuleProps } from "@src/components/Rule";

const startsWith: RuleProps = {
  id: "_.startsWith",
  blocks: [
    {
      type: "title",
      title: { id: "_.startsWith-title", children: "_.startsWith" },
    },
    {
      type: "description",
      description: {
        id: "_.startsWith-description",
        children: (
          <>
            Принимает <b>строку, подстроку и индекс</b> (по умолчанию 0). Bозвращает <b>true</b>, если по указанному
            индексу страка начинается с подстроки
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.startsWith-code",
        language: "ts",
        children: `console.log(_.startsWith("abc", "a")); // true;
console.log(_.startsWith("abc", "b")); // false;
console.log(_.startsWith("abc", "b", 1)); // true;`,
      },
    },
  ],
};

export default startsWith;
