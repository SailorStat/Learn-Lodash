import React from "react";
import { RuleProps } from "@src/components/Rule";

const cloneDeep: RuleProps = {
  id: "_.cloneDeep",
  blocks: [
    {
      type: "title",
      title: { id: "_.cloneDeep-title", children: "_.cloneDeep" },
    },
    {
      type: "description",
      description: {
        id: "_.cloneDeep-description",
        children: (
          <>
            Принимает <b>значение</b>, возвращает <b>глубокую копию</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.cloneDeep-code",
        language: "ts",
        children: `const array = [{ a: 1 }, { b: 2 }];
const cloneDeepArray = _.cloneDeep(array);
console.log(cloneDeepArray[0] === array[0]); // false;`,
      },
    },
  ],
};

export default cloneDeep;
