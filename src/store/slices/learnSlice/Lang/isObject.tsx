import React from "react";
import { RuleProps } from "@src/components/Rule";

const isObject: RuleProps = {
  id: "_.isObject",
  blocks: [
    {
      type: "title",
      title: { id: "_.isObject-title", children: "_.isObject" },
    },
    {
      type: "description",
      description: {
        id: "_.isObject-description",
        children: (
          <>
            Принимает <b>значениe</b>, возвращает <b>true</b> для значений, являющихся объектом
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.isObject-code",
        language: "ts",
        children: `const isObj = _.isObject(3);
console.log(isObj); // false;

const isObj2 = _.isObject(new Number(3));
console.log(isObj2); // true;`,
      },
    },
  ],
};

export default isObject;
