import React from "react";
import { RuleProps } from "@src/components/Rule";

const valueProto: RuleProps = {
  id: "_.prototype.value",
  blocks: [
    {
      type: "title",
      title: { id: "_.prototype.value", children: "_.prototype.value" },
    },
    {
      type: "description",
      description: {
        id: "_.prototype.value-description",
        children: (
          <>
            Применяется <b>для значений, обёрнутых в _()</b>. Возвращает <b>значение</b> без обёртки
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.prototype.value-code",
        language: "ts",
        children: `const baseArray = [1, 2];

const value = _(baseArray).value();
console.log(value); // [1, 2];`,
      },
    },
  ],
};

export default valueProto;
