import React from "react";
import { RuleProps } from "@src/components/Rule";

const isNil: RuleProps = {
  id: "_.isNil",
  blocks: [
    {
      type: "title",
      title: { id: "_.isNil-title", children: "_.isNil" },
    },
    {
      type: "description",
      description: {
        id: "_.isNil-description",
        children: (
          <>
            Принимает <b>значение</b>, возвращает <b>true</b>, если значение нулём
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.isNil-code",
        language: "ts",
        children: `const isLikeNil = _.isNil(null);
console.log(isLikeNil); // true;

const isLikeNil2 = _.isNative(0);
console.log(isLikeNil2); // true;`,
      },
    },
  ],
};

export default isNil;
