import React from "react";
import { RuleProps } from "@src/components/Rule";

const atProto: RuleProps = {
  id: "_.prototype.at",
  blocks: [
    {
      type: "title",
      title: { id: "_.prototype.at", children: "_.prototype.at" },
    },
    {
      type: "description",
      description: {
        id: "_.prototype.at-description",
        children: (
          <>
            Принимает <b>массив путей</b>. Bозвращает <b>массив значений по этим путям</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.prototype.at-code",
        language: "ts",
        children: `const baseObject = { a: [{ b: { c: 3 } }, 4] };

const values = _
  .chain(baseObject)
  .at(["a[1]", "a[0].b.c"])
  .value();

console.log(values); // [4, 3];`,
      },
    },
  ],
};

export default atProto;
