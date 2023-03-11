import React from "react";
import { RuleProps } from "@src/components/Rule";

const isMatchWith: RuleProps = {
  id: "_.isMatchWith",
  blocks: [
    {
      type: "title",
      title: { id: "_.isMatchWith-title", children: "_.isMatchWith" },
    },
    {
      type: "description",
      description: {
        id: "_.isMatchWith-description",
        children: (
          <>
            Принимает <b>объект, искомый объект и функцию</b>, возвращает <b>true</b>, если объект рекурсивной проверкой
            содержит искомый объект после применения функции
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.isMatchWith-code",
        language: "ts",
        children: `const baseObject = { a: { b: 3 }, c: 4 };

const transformation = (a, b) => a.b % 2 === b.b % 2;

const isMatchWithed = _.isMatchWith(baseObject, { a: { b: 1 } }, transformation);
console.log(isMatchWithed); // true;

const isMatchWithed2 = _.isMatchWith(baseObject, { a: { b: 5 } }, transformation);
console.log(isMatchWithed2); // true;`,
      },
    },
  ],
};

export default isMatchWith;
