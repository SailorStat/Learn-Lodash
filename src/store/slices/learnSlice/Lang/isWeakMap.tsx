import React from "react";
import { RuleProps } from "@src/components/Rule";

const isWeakMap: RuleProps = {
  id: "_.isWeakMap",
  blocks: [
    {
      type: "title",
      title: { id: "_.isWeakMap-title", children: "_.isWeakMap" },
    },
    {
      type: "description",
      description: {
        id: "_.isWeakMap-description",
        children: (
          <>
            Принимает <b>значениe</b>, возвращает <b>true</b> для значений, являющихся WeakMap-объектом
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.isWeakMap-code",
        language: "ts",
        children: `const isLikeAtWeakMap = _.isWeakMap(new WeakMap());
console.log(isLikeAtWeakMap); // true;

const isLikeAtWeakMap2 = _.isWeakMap("3");
console.log(isLikeAtWeakMap2); // false;`,
      },
    },
  ],
};

export default isWeakMap;
