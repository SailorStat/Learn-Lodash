import React from "react";
import { RuleProps } from "@src/components/Rule";

const overEvery: RuleProps = {
  id: "_.overEvery",
  blocks: [
    {
      type: "title",
      title: { id: "_.overEvery-title", children: "_.overEvery" },
    },
    {
      type: "description",
      description: {
        id: "_.overEvery-description",
        children: (
          <>
            Принимает <b>массив функций</b>. Возвращает <b>функцию</b>, которая принимает аргумент, возвращает true,
            если все функции возвращают true
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.overEvery-code",
        language: "ts",
        children: `const overedEvery = _.overEvery(Boolean, (value: number) => value < 100);
console.log(overedEvery(101)); // false;`,
      },
    },
  ],
};

export default overEvery;
