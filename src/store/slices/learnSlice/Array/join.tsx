import React from "react";
import { RuleProps } from "@src/components/Rule";

const join: RuleProps = {
  id: "_.join",
  blocks: [
    {
      type: "title",
      title: { id: "_.join-title", children: "_.join" },
    },
    {
      type: "description",
      description: {
        id: "_.join-description",
        children: (
          <>
            Принимает <b>массив и строку</b>, возвращает <b>строку</b> из значений массива, соединённых переданной
            строкой
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.join-code",
        language: "ts",
        children: `const baseArray = [1, 2, 3, 5, 8];

const joined = _.join(baseArray, "~");
console.log(joined); // "1~2~3~5~8";`,
      },
    },
  ],
};

export default join;
