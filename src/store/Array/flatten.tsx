import React from "react";
import { RuleProps } from "@src/components/Rule";

const flatten: RuleProps = {
  id: "_.flatten",
  blocks: [
    {
      type: "title",
      title: { id: "_.flatten-title", children: "_.flatten" },
    },
    {
      type: "description",
      description: {
        id: "_.flatten-description",
        children: (
          <>
            Принимает <b>массив</b>, возвращает <b>массив из значений вложенных массивов и значений</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.flatten-code",
        language: "ts",
        children: `const baseArray = [{ a: 3, b: 1 }, [{ a: 3, b: 1 }], [[{ a: 0, b: 5 }]], [{ a: 3, b: 2 }]];

const flatted = _.flatten(baseArray);
console.log(flatted); // [{ a: 3, b: 1 }, {  a: 3, b: 1 }, [{ a: 0, b: 5 }], { a: 3,  b: 2 }];`,
      },
    },
  ],
};

export default flatten;
