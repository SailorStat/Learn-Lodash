import React from "react";
import { RuleProps } from "@src/components/Rule";

const negate: RuleProps = {
  id: "_.negate",
  blocks: [
    {
      type: "title",
      title: { id: "_.negate-title", children: "_.negate" },
    },
    {
      type: "description",
      description: {
        id: "_.negate-description",
        children: (
          <>
            Принимает <b>функцию</b>, которая возвращает boolean, возвращает <b>функцию</b>, которая возвращает обратное
            значение для исходной функции
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.negate-code",
        language: "ts",
        children: `const func = _.negate((n: number) => n > 10);

const negateMap = _.map([1, 3, 6, 10, 15, 21], func);
console.log(negateMap); // [true, true, true, true, false, false];`,
      },
    },
  ],
};

export default negate;
