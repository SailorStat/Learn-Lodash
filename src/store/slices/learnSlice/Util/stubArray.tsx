import React from "react";
import { RuleProps } from "@src/components/Rule";

const stubArray: RuleProps = {
  id: "_.stubArray",
  blocks: [
    {
      type: "title",
      title: { id: "_.stubArray-title", children: "_.stubArray" },
    },
    {
      type: "description",
      description: {
        id: "_.stubArray-description",
        children: (
          <>
            Bозвращает <b>новый пустой массив</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.stubArray-code",
        language: "ts",
        children: `console.log(_.stubArray()); // [];`,
      },
    },
  ],
};

export default stubArray;
