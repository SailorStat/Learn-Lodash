import React from "react";
import { RuleProps } from "@src/components/Rule";

const delay: RuleProps = {
  id: "_.delay",
  blocks: [
    {
      type: "title",
      title: { id: "_.delay-title", children: "_.delay" },
    },
    {
      type: "description",
      description: {
        id: "_.delay-description",
        children: (
          <>
            Принимает <b>функцию, время в миллисекундах и аргументы</b>,{" "}
            <b>выполняет функцию после указанного времени</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.delay-code",
        language: "ts",
        children: `const logger = (num: number) => console.log(num);

_.delay(logger, 100, 1);
logger(2);
// 2;
logger(3);
// 3;
// 1;`,
      },
    },
  ],
};

export default delay;
