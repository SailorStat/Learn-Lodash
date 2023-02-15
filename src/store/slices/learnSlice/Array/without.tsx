import React from "react";
import { RuleProps } from "@src/components/Rule";

const without: RuleProps = {
  id: "_.without",
  blocks: [
    {
      type: "title",
      title: { id: "_.without-title", children: "_.without" },
    },
    {
      type: "description",
      description: {
        id: "_.without-description",
        children: (
          <>
            Принимает <b>массив и исключаемые значения</b>, возвращает <b>массив</b> значений кроме исключаемых
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.without-code",
        language: "ts",
        children: `const baseArray = [1, 5, 2, 1, 5, 3];

const withouted = _.without(baseArray, 1, 5);
console.log(withouted); // [2, 3];
console.log(baseArray); // [1, 5, 2, 1, 5, 3];`,
      },
    },
  ],
};

export default without;
