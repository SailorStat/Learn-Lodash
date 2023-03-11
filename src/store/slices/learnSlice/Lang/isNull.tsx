import React from "react";
import { RuleProps } from "@src/components/Rule";

const isNull: RuleProps = {
  id: "_.isNull",
  blocks: [
    {
      type: "title",
      title: { id: "_.isNull-title", children: "_.isNull" },
    },
    {
      type: "description",
      description: {
        id: "_.isNull-description",
        children: (
          <>
            Принимает <b>значение</b>, возвращает <b>true</b>, если значение null
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.isNull-code",
        language: "ts",
        children: `const isLikeNull = _.isNull(null);
console.log(isLikeNull); // true;

const isLikeNull2 = _.isNative(0);
console.log(isLikeNull2); // false;`,
      },
    },
  ],
};

export default isNull;
