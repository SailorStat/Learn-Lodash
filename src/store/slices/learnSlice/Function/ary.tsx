import React from "react";
import { RuleProps } from "@src/components/Rule";

const ary: RuleProps = {
  id: "_.ary",
  blocks: [
    {
      type: "title",
      title: { id: "_.ary-title", children: "_.ary" },
    },
    {
      type: "description",
      description: {
        id: "_.ary-description",
        children: (
          <>
            Принимает <b>функцию и N-число</b>, возвращает <b>функцию</b>, которая получает только N количество
            аргументов
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.ary-code",
        language: "ts",
        children: `const func = (...args) => console.log(...args);

_.map(["6", "8", "10"], _.ary(func, 1));
// 6;
// 8;
// 10;

const aryMapped = _.map(["6", "8", "10"], _.ary(func, 2));
// 6  0;
// 8  1;
// 10 2;
console.log(aryMapped); // [undefined, undefined, undefined]`,
      },
    },
  ],
};

export default ary;
