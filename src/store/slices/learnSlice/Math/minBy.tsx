import React from "react";
import { RuleProps } from "@src/components/Rule";

const minBy: RuleProps = {
  id: "_.minBy",
  blocks: [
    {
      type: "title",
      title: { id: "_.minBy-title", children: "_.minBy" },
    },
    {
      type: "description",
      description: {
        id: "_.minBy-description",
        children: (
          <>
            Принимает <b>массив и функцию</b>. Bозвращает <b>наименьшее число</b> результату применения функции
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.minBy-code",
        language: "ts",
        children: `const minBy = _.minBy([{ a: 0 }, { a: 3 }]);
console.log(minBy, (value) => value.a); // 0;`,
      },
    },
    {
      type: "description",
      description: {
        id: "_.minBy-description",
        children: <>Вместо функции можно передать ключ</>,
      },
    },
    {
      type: "code",
      code: {
        id: "_.minBy-code",
        language: "ts",
        children: `const minBy = _.minBy([{ a: 0 }, { a: 3 }]);
console.log(minBy, "a"); // 0;`,
      },
    },
  ],
};

export default minBy;
