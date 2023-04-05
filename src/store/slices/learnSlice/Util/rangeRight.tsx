import React from "react";
import { RuleProps } from "@src/components/Rule";

const rangeRight: RuleProps = {
  id: "_.rangeRight",
  blocks: [
    {
      type: "title",
      title: { id: "_.rangeRight-title", children: "_.rangeRight" },
    },
    {
      type: "description",
      description: {
        id: "_.rangeRight-description",
        children: (
          <>
            Принимает <b>стартовое значение</b> (или 0), <b>конечное</b> и <b>шаг</b> (или 1). Bозвращает{" "}
            <b>массив чисел</b>, которые начинаются после конечного значения и с шагом заполняют все значения до
            стартового
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.rangeRight-code",
        language: "ts",
        children: `console.log(_.rangeRight(0)); // [];
console.log(_.rangeRight(3)); // [2, 1, 0];
console.log(_.rangeRight(-3)); // [-2, -1, 0];
console.log(_.rangeRight(1, 3)); // [2, 1];
console.log(_.rangeRight(1, 3, 0.5)); // [2.5, 2, 1.5, 1];`,
      },
    },
  ],
};

export default rangeRight;
