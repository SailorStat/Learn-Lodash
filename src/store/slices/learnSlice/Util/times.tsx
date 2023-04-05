import React from "react";
import { RuleProps } from "@src/components/Rule";

const times: RuleProps = {
  id: "_.times",
  blocks: [
    {
      type: "title",
      title: { id: "_.times-title", children: "_.times" },
    },
    {
      type: "description",
      description: {
        id: "_.times-description",
        children: (
          <>
            Принимает <b>количество и функцию</b>. Bозвращает <b>массив значений</b> длинной переданного количества
            <div>Значения являются результатом выполнения функции для индекса массива</div>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.times-code",
        language: "ts",
        children: `console.log(_.times(3, (value) => value ** 2)); // [0, 1, 4];
console.log(_.times(4, Boolean)); // [false, true, true, true];
console.log(_.times(5, String)); // ['0', '1', '2', '3', '4'];`,
      },
    },
  ],
};

export default times;
