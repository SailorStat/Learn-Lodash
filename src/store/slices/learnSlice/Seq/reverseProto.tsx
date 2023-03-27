import React from "react";
import { RuleProps } from "@src/components/Rule";

const reverseProto: RuleProps = {
  id: "_.prototype.reverse",
  blocks: [
    {
      type: "title",
      title: { id: "_.prototype.reverse", children: "_.prototype.reverse" },
    },
    {
      type: "description",
      description: {
        id: "_.prototype.reverse-description",
        children: (
          <>
            Применяется <b>для значений, обёрнутых в _()</b>. Возвращает <b>массив</b> значений в обратном порядке
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.prototype.reverse-code",
        language: "ts",
        children: `const baseArray = [1, 2];

const reverted = _(baseArray).reverse().value();
console.log(reverted); // [2, 1];`,
      },
    },
  ],
};

export default reverseProto;
