import React from "react";
import { RuleProps } from "@src/components/Rule";

const inRange: RuleProps = {
  id: "_.inRange",
  blocks: [
    {
      type: "title",
      title: { id: "_.inRange-title", children: "_.inRange" },
    },
    {
      type: "description",
      description: {
        id: "_.inRange-description",
        children: (
          <>
            Принимает <b>2 или 3 числа</b>. Bозвращает <b>true</b>, если предпоследнее число меньше последнего и, если
            чисел 3, больше первого
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.inRange-code",
        language: "ts",
        children: `console.log(_.inRange(1, 3, 2)); // false;
console.log(_.inRange(3, 2)); // false;
console.log(_.inRange(1, 2, 3)); // true;
console.log(_.inRange(2, 3)); // true;`,
      },
    },
  ],
};

export default inRange;
