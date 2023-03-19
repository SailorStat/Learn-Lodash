import React from "react";
import { RuleProps } from "@src/components/Rule";

const omit: RuleProps = {
  id: "_.omit",
  blocks: [
    {
      type: "title",
      title: { id: "_.omit-title", children: "_.omit" },
    },
    {
      type: "description",
      description: {
        id: "_.omit-description",
        children: (
          <>
            Принимает <b>объект и массив путей</b>. Возвращает <b>объект</b> без свойств по указанным путям
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.omit-code",
        language: "ts",
        children: `const baseObject = { a: { c: 1 }, b: 2 };

const omited = _.omit(baseObject, ["a['c']"]);
console.log(omited); // { a: {}, b: 2 };`,
      },
    },
  ],
};

export default omit;
