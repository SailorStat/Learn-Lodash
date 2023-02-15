import React from "react";
import { RuleProps } from "@src/components/Rule";

const uniq: RuleProps = {
  id: "_.uniq",
  blocks: [
    {
      type: "title",
      title: { id: "_.uniq-title", children: "_.uniq" },
    },
    {
      type: "description",
      description: {
        id: "_.uniq-description",
        children: (
          <>
            Принимает <b>массивы</b>, возвращает <b>массив</b> уникальных значений
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.uniq-code",
        language: "ts",
        children: `const baseArray = [1, 2, 3, 2, 1];

const united = _.uniq(baseArray);
console.log(united); // [1, 2, 3];`,
      },
    },
  ],
};

export default uniq;
