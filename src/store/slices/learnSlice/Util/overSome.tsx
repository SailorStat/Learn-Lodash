import React from "react";
import { RuleProps } from "@src/components/Rule";

const overSome: RuleProps = {
  id: "_.overSome",
  blocks: [
    {
      type: "title",
      title: { id: "_.overSome-title", children: "_.overSome" },
    },
    {
      type: "description",
      description: {
        id: "_.overSome-description",
        children: (
          <>
            Принимает <b>массив функций</b>. Возвращает <b>функцию</b>, которая принимает аргумент, возвращает true,
            если хотя бы одна из функций возвращает true
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.overSome-code",
        language: "ts",
        children: `const overedSome = _.overSome(Boolean, (value: number) => value < 100);
console.log(overedSome(101)); // false;`,
      },
    },
  ],
};

export default overSome;
