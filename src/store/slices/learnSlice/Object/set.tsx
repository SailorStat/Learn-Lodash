import React from "react";
import { RuleProps } from "@src/components/Rule";

const set: RuleProps = {
  id: "_.set",
  blocks: [
    {
      type: "title",
      title: { id: "_.set-title", children: "_.set" },
    },
    {
      type: "description",
      description: {
        id: "_.set-description",
        children: (
          <>
            Принимает <b>объект, путь и значение</b>. Возвращает <b>объект</b> с записанным значением по указанному пути
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.set-code",
        language: "ts",
        children: `const baseObject = { a: { c: 1 }, b: 2 };

const seted = _.set(baseObject, "a.d", 3);
console.log(seted); // { a: { c: 1, d: 3 }, b: 2 };`,
      },
    },
  ],
};

export default set;
