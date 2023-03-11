import React from "react";
import { RuleProps } from "@src/components/Rule";

const isSet: RuleProps = {
  id: "_.isSet",
  blocks: [
    {
      type: "title",
      title: { id: "_.isSet-title", children: "_.isSet" },
    },
    {
      type: "description",
      description: {
        id: "_.isSet-description",
        children: (
          <>
            Принимает <b>значениe</b>, возвращает <b>true</b> для значений, являющихся Set-объектом
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.isSet-code",
        language: "ts",
        children: `const isLikeAtSet = _.isSet(new Set());
console.log(isLikeAtSet); // true;

const isLikeAtSet2 = _.isSet("3");
console.log(isLikeAtSet2); // false;`,
      },
    },
  ],
};

export default isSet;
