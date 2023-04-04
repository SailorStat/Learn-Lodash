import React from "react";
import { RuleProps } from "@src/components/Rule";

const flowRight: RuleProps = {
  id: "_.flowRight",
  blocks: [
    {
      type: "title",
      title: { id: "_.flowRight-title", children: "_.flowRight" },
    },
    {
      type: "description",
      description: {
        id: "_.flowRight-description",
        children: (
          <>
            Принимает <b>массив функций</b>. Bозвращает <b>функцию</b>, которая принимает значения и последовательно
            вызывает функции из массива, начиная с конца
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.flowRight-code",
        language: "ts",
        children: `const square = (n: number) => n * n;

const squareAdd = _.flowRight([square, _.add]);
console.log(squareAdd(3, 2)); // 25;`,
      },
    },
  ],
};

export default flowRight;
