import React from "react";
import { RuleProps } from "@src/components/Rule";

const range: RuleProps = {
  id: "_.range",
  blocks: [
    {
      type: "title",
      title: { id: "_.range-title", children: "_.range" },
    },
    {
      type: "description",
      description: {
        id: "_.range-description",
        children: (
          <>
            Принимает <b>стартовое значение</b> (или 0), <b>конечное</b> и <b>шаг</b> (или 1). Bозвращает{" "}
            <b>массив чисел</b>, которые начинаются от стартового зачения и с шагом заполняют все значения перед
            конечным
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.range-code",
        language: "ts",
        children: `console.log(_.range(0)); // [];
console.log(_.range(3)); // [0, 1, 2];
console.log(_.range(-3)); // [0, -1, -2];
console.log(_.range(1, 3)); // [1, 2];
console.log(_.range(1, 3, 0.5)); // [1, 1.5, 2, 2.5];`,
      },
    },
  ],
};

export default range;
