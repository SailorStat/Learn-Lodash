import React from "react";
import { RuleProps } from "@src/components/Rule";

const isPlainObject: RuleProps = {
  id: "_.isPlainObject",
  blocks: [
    {
      type: "title",
      title: { id: "_.isPlainObject-title", children: "_.isPlainObject" },
    },
    {
      type: "description",
      description: {
        id: "_.isPlainObject-description",
        children: (
          <>
            Принимает <b>значениe</b>, возвращает <b>true</b> для значений, являющихся объектом c null [[Prototype]]
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.isPlainObject-code",
        language: "ts",
        children: `const isPlainObj = _.isPlainObject([]);
console.log(isPlainObj); // false;

const isPlainObj2 = _.isPlainObject({});
console.log(isPlainObj2); // true;`,
      },
    },
  ],
};

export default isPlainObject;
