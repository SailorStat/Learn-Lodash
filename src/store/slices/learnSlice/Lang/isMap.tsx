import React from "react";
import { RuleProps } from "@src/components/Rule";

const isMap: RuleProps = {
  id: "_.isMap",
  blocks: [
    {
      type: "title",
      title: { id: "_.isMap-title", children: "_.isMap" },
    },
    {
      type: "description",
      description: {
        id: "_.isMap-description",
        children: (
          <>
            Принимает <b>значениe</b>, возвращает <b>true</b> для значений, являющихся Map-объектом
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.isMap-code",
        language: "ts",
        children: `const isLikeAtMap = _.isMap(new Map());
console.log(isLikeAtMap); // true;

const isLikeAtMap2 = _.isMap("3");
console.log(isLikeAtMap2); // false;`,
      },
    },
  ],
};

export default isMap;
