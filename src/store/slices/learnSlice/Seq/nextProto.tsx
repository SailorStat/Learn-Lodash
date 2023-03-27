import React from "react";
import { RuleProps } from "@src/components/Rule";

const nextProto: RuleProps = {
  id: "_.prototype.next",
  blocks: [
    {
      type: "title",
      title: { id: "_.prototype.next", children: "_.prototype.next" },
    },
    {
      type: "description",
      description: {
        id: "_.prototype.next-description",
        children: (
          <>
            Применяется <b>для значений, обёрнутых в _()</b>. Возвращает <b>значения итерируемых объектов</b>, как
            функция-генератор
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.prototype.next-code",
        language: "ts",
        children: `const wrapped = _([1, 2]);
 
const next = wrapped.next();
console.log(next); // { done: false, value: 1 };
 
const next2 = wrapped.next();
console.log(next2); // { done: false, value: 2 };
 
const next3 = wrapped.next();
console.log(next3); // { done: true, value: undefined };`,
      },
    },
  ],
};

export default nextProto;
