import React from "react";
import { RuleProps } from "@src/components/Rule";

const nthArg: RuleProps = {
  id: "_.nthArg",
  blocks: [
    {
      type: "title",
      title: { id: "_.nthArg-title", children: "_.nthArg" },
    },
    {
      type: "description",
      description: {
        id: "_.nthArg-description",
        children: (
          <>
            Принимает <b>порядковый номер</b>. Возвращает <b>функцию</b>, которая принимает аргументы, водзвращает
            аргумент по порядковому номеру
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.nthArg-code",
        language: "ts",
        children: `console.log(_.nthArg(1)(2, 4, 9, 25)); // 4;
console.log(_.nthArg(-2)(2, 4, 9, 25)); // 9;`,
      },
    },
  ],
};

export default nthArg;
