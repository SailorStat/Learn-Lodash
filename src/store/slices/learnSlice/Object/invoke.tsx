import React from "react";
import { RuleProps } from "@src/components/Rule";

const invoke: RuleProps = {
  id: "_.invoke",
  blocks: [
    {
      type: "title",
      title: { id: "_.invoke-title", children: "_.invoke" },
    },
    {
      type: "description",
      description: {
        id: "_.invoke-description",
        children: (
          <>
            Принимает <b>объект, путь к методу и аргументы</b>. Bозвращает <b>результат выполнения функции</b> с
            аргументами
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.invoke-code",
        language: "ts",
        children: `const baseObject = { a: [{ b: { c: 3 } }, 4] };

const invoked = _.invoke(baseObject, "a[0].b.c.toFixed", 3);
console.log(invoked); // "3.000"`,
      },
    },
  ],
};

export default invoke;
