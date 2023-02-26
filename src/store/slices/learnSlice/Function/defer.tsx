import React from "react";
import { RuleProps } from "@src/components/Rule";

const defer: RuleProps = {
  id: "_.defer",
  blocks: [
    {
      type: "title",
      title: { id: "_.defer-title", children: "_.defer" },
    },
    {
      type: "description",
      description: {
        id: "_.defer-description",
        children: (
          <>
            Принимает <b>функцию и аргументы</b>, возвращает <b>результат выполнения функции</b>
            <b>Особенность заключается в том, что функция выполняется после совобождения стека вызовов</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.defer-code",
        language: "ts",
        children: `const logger = (num: number) => console.log(num);

_.defer(logger, 1);
logger(2);
// 2;
logger(3);
// 3;
// 1;`,
      },
    },
  ],
};

export default defer;
