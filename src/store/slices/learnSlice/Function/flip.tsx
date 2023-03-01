import React from "react";
import { RuleProps } from "@src/components/Rule";

const flip: RuleProps = {
  id: "_.flip",
  blocks: [
    {
      type: "title",
      title: { id: "_.flip-title", children: "_.flip" },
    },
    {
      type: "description",
      description: {
        id: "_.flip-description",
        children: (
          <>
            Принимает <b>функцию</b>, возвращает <b>функцию</b>, которая принимает аргументы в обратном порядке
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.flip-code",
        language: "ts",
        children: `const baseArray = [1, 2, 3, 4];

const fliper = _.flip((...arr) => [...arr]);

const fliped = fliper(...baseArray);
console.log(fliped); // [4, 3, 2, 1];`,
      },
    },
  ],
};

export default flip;
