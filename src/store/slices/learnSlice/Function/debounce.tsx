import React from "react";
import { RuleProps } from "@src/components/Rule";

const debounce: RuleProps = {
  id: "_.debounce",
  blocks: [
    {
      type: "title",
      title: { id: "_.debounce-title", children: "_.debounce" },
    },
    {
      type: "description",
      description: {
        id: "_.debounce-description",
        children: (
          <>
            Принимает <b>функцию и таймаут</b>, возвращает <b>функцию</b>, которая срабатывает не чаще таймаута. Когда
            время истекает, то функция будет вызвана для последнего состояния и аргументов
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.debounce-code",
        language: "ts",
        children: `const debounced = _.debounce((num: number) => console.log(num), 1000);

debounced(1);
setTimeout(() => debounced(2), 300);
setTimeout(() => debounced(3), 1400);
// ...
// 2;
// ...
// 3;`,
      },
    },
  ],
};

export default debounce;
