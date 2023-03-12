import React from "react";
import { RuleProps } from "@src/components/Rule";

const at: RuleProps = {
  id: "_.at",
  blocks: [
    {
      type: "title",
      title: { id: "_.at-title", children: "_.at" },
    },
    {
      type: "description",
      description: {
        id: "_.at-description",
        children: (
          <>
            Принимает <b>объекты и массив путей</b>. Bозвращает <b>массив</b> значений по указанным путям
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.at-code",
        language: "ts",
        children: `const baseObject = { a: [{ b: { c: 3 } }, 4] };
const values = _.at(object, ["a[1]", "a[0].b.c"]);
console.log(values); // [4, 3]`,
      },
    },
  ],
};

export default at;
