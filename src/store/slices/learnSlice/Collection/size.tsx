import React from "react";
import { RuleProps } from "@src/components/Rule";

const size: RuleProps = {
  id: "_.size",
  blocks: [
    {
      type: "title",
      title: { id: "_.size-title", children: "_.size" },
    },
    {
      type: "description",
      description: {
        id: "_.size-description",
        children: (
          <>
            Принимает <b>элемент</b>, возвращает <b>длину элемента</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.size-code",
        language: "ts",
        children: `const sized = _.size([1.3, 1.2, 4.5, 4.6]);
console.log(sized); // 4;

const sized2 = _.size({ a: 3, b: "lala" });
console.log(sized2); // 2;

const sized3 = _.size("lala");
console.log(sized3); // 4;`,
      },
    },
  ],
};

export default size;
