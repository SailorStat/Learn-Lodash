import React from "react";
import { RuleProps } from "@src/components/Rule";

const meanBy: RuleProps = {
  id: "_.meanBy",
  blocks: [
    {
      type: "title",
      title: { id: "_.meanBy-title", children: "_.meanBy" },
    },
    {
      type: "description",
      description: {
        id: "_.meanBy-description",
        children: (
          <>
            Принимает <b>массив и функцию</b>. Bозвращает <b>среднее арифметическое</b> по результату применения функции
            к каждому элементу
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.meanBy-code",
        language: "ts",
        children: `const meanBy = _.meanBy([{ a: -2 }, { a: 5 }, { a: 3 }]);
console.log(meanBy, (value) => value.a); // 2;`,
      },
    },
    {
      type: "description",
      description: {
        id: "_.meanBy-description",
        children: <>Вместо функции можно передать ключ</>,
      },
    },
    {
      type: "code",
      code: {
        id: "_.meanBy-code",
        language: "ts",
        children: `const meanBy = _.meanBy([{ a: -2 }, { a: 5 }, { a: 3 }]);
console.log(meanBy, "a"); // 2;`,
      },
    },
  ],
};

export default meanBy;
