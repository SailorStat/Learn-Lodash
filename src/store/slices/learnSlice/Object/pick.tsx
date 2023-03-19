import React from "react";
import { RuleProps } from "@src/components/Rule";

const pick: RuleProps = {
  id: "_.pick",
  blocks: [
    {
      type: "title",
      title: { id: "_.pick-title", children: "_.pick" },
    },
    {
      type: "description",
      description: {
        id: "_.pick-description",
        children: (
          <>
            Принимает <b>объект и массив путей</b>. Возвращает <b>объект</b> из свойств по указанным путям
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.pick-code",
        language: "ts",
        children: `const baseObject = { a: { c: 1 }, b: 2 };

const picked = _.pick(baseObject, ["a['c']", "a.d"]);
console.log(picked); // { a: { c: 1 } };`,
      },
    },
  ],
};

export default pick;
