import React from "react";
import { RuleProps } from "@src/components/Rule";

const isWeakSet: RuleProps = {
  id: "_.isWeakSet",
  blocks: [
    {
      type: "title",
      title: { id: "_.isWeakSet-title", children: "_.isWeakSet" },
    },
    {
      type: "description",
      description: {
        id: "_.isWeakSet-description",
        children: (
          <>
            Принимает <b>значениe</b>, возвращает <b>true</b> для значений, являющихся WeakSet-объектом
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.isWeakSet-code",
        language: "ts",
        children: `const isLikeAtWeakSet = _.isWeakSet(new WeakSet());
console.log(isLikeAtWeakSet); // true;

const isLikeAtWeakSet2 = _.isWeakSet("3");
console.log(isLikeAtWeakSet2); // false;`,
      },
    },
  ],
};

export default isWeakSet;
