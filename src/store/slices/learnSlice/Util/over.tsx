import React from "react";
import { RuleProps } from "@src/components/Rule";

const over: RuleProps = {
  id: "_.over",
  blocks: [
    {
      type: "title",
      title: { id: "_.over-title", children: "_.over" },
    },
    {
      type: "description",
      description: {
        id: "_.over-description",
        children: (
          <>
            Принимает <b>массив функций</b>. Возвращает <b>функцию</b>, которая принимает аргументы, возвращает массив
            результатов вызовов функций с аргументами
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.over-code",
        language: "ts",
        children: `const overed = _.over([_.multiply, Math.max, Math.min]);
console.log(overed(2, 3)); // [6, 3, 2];`,
      },
    },
  ],
};

export default over;
