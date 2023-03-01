import React from "react";
import { RuleProps } from "@src/components/Rule";

const overArgs: RuleProps = {
  id: "_.overArgs",
  blocks: [
    {
      type: "title",
      title: { id: "_.overArgs-title", children: "_.overArgs" },
    },
    {
      type: "description",
      description: {
        id: "_.overArgs-description",
        children: (
          <>
            Принимает <b>функцию и массив функций</b>, возвращает <b>функцию</b>, которая модицифицирует каждый
            N-аргумент N-функцией
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.overArgs-code",
        language: "ts",
        children: `const multi2 = (n: number) => n * 2;
const multi3 = (n: number) => n * 3;

const overArgsFunc = _.overArgs((a, b) => [a, b], [multi2, multi3]);
const overed = overArgsFunc(2, 4);
console.log(overed); // [4, 12];`,
      },
    },
  ],
};

export default overArgs;
