import React from "react";
import { RuleProps } from "@src/components/Rule";

const omitBy: RuleProps = {
  id: "_.omitBy",
  blocks: [
    {
      type: "title",
      title: { id: "_.omitBy-title", children: "_.omitBy" },
    },
    {
      type: "description",
      description: {
        id: "_.omitBy-description",
        children: (
          <>
            Принимает <b>объект и функцию преобразования</b>. Возвращает <b>объект</b> без свойств для которых функция
            преобразования вернула <b>== true</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.omitBy-code",
        language: "ts",
        children: `const baseObject = { a: { c: 1 }, b: 2, d: undefined };

const omitedBy = _.omitBy(baseObject, (value) => !value);
console.log(omitedBy); // { a: { c: 1 }, b: 2 };`,
      },
    },
  ],
};

export default omitBy;
