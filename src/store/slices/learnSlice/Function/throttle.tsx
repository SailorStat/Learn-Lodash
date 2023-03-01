import React from "react";
import { RuleProps } from "@src/components/Rule";

const throttle: RuleProps = {
  id: "_.throttle",
  blocks: [
    {
      type: "title",
      title: { id: "_.throttle-title", children: "_.throttle" },
    },
    {
      type: "description",
      description: {
        id: "_.throttle-description",
        children: (
          <>
            Принимает <b>функцию, время в миллисекундах и аргументы</b>, возвращает <b>функцию</b>, которая принмиает
            аргументы и вызывается не чаще указанного времени
            <div>Все вызовы, кроме первого и последнего в указанный период времени, будут проигнорированы</div>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.throttle-code",
        language: "ts",
        children: `const logger = (num: number) => console.log(num);

const throttledLogger = _.throttle(logger, 1000);
throttledLogger(1);
// 1;
throttledLogger(2);
logger(3);
// 3;
// 2;`,
      },
    },
  ],
};

export default throttle;
