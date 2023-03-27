import React from "react";
import { RuleProps } from "@src/components/Rule";

const plantProto: RuleProps = {
  id: "_.prototype.plant",
  blocks: [
    {
      type: "title",
      title: { id: "_.prototype.plant", children: "_.prototype.plant" },
    },
    {
      type: "description",
      description: {
        id: "_.prototype.plant-description",
        children: (
          <>
            Применяется <b>для значений, обёрнутых в _()</b>. Принимает <b>значение</b>. Возвращает{" "}
            <b>копию цепочки с полученным значением</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.prototype.plant-code",
        language: "ts",
        children: `const wrapped = _([1, 2]);
 
const plant = wrapped.plant();
console.log(plant); // { done: false, value: 1 };
 
const plant2 = wrapped.plant();
console.log(plant2); // { done: false, value: 2 };
 
const plant3 = wrapped.plant();
console.log(plant3); // { done: true, value: undefined };`,
      },
    },
  ],
};

export default plantProto;
