import React from "react";
import Warning from "@src/components/common/Warning";
import { RuleProps } from "@src/components/Rule";

const enableIterator: RuleProps = {
  id: "_.prototype[Symbol.iterator]",
  blocks: [
    {
      type: "title",
      title: { id: "_.prototype[Symbol.iterator]", children: "_.prototype[Symbol.iterator]" },
    },
    {
      type: "description",
      description: {
        id: "_.prototype[Symbol.iterator]-description",
        children: (
          <>
            Применяется <b>для значений, обёрнутых в _()</b>. Bозвращает <b>итерируемое значение</b>
            <Warning>
              Увидеть работоспособность не удалось. <b>TS</b> показывает ошибки
            </Warning>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.prototype[Symbol.iterator]-code",
        language: "ts",
        children: `const baseArray = [1, 2];

const wrapped = _(baseArray);
wrapped[Symbol.iterator]() === wrapped;

console.log(Array.from(wrapped)); // [1, 2];`,
      },
    },
  ],
};

export default enableIterator;
