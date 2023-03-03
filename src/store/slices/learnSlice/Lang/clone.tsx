import React from "react";
import { RuleProps } from "@src/components/Rule";

const clone: RuleProps = {
  id: "_.clone",
  blocks: [
    {
      type: "title",
      title: { id: "_.clone-title", children: "_.clone" },
    },
    {
      type: "description",
      description: {
        id: "_.clone-description",
        children: (
          <>
            Принимает <b>значение</b>, возвращает <b>теневой клон</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.clone-code",
        language: "ts",
        children: `const array = [{ a: 1 }, { b: 2 }];
const cloneArray = _.clone(array);
console.log(cloneArray[0] === array[0]); // true;`,
      },
    },
  ],
};

export default clone;
