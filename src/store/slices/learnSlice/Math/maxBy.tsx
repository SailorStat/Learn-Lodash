import React from "react";
import { RuleProps } from "@src/components/Rule";

const maxBy: RuleProps = {
  id: "_.maxBy",
  blocks: [
    {
      type: "title",
      title: { id: "_.maxBy-title", children: "_.maxBy" },
    },
    {
      type: "description",
      description: {
        id: "_.maxBy-description",
        children: (
          <>
            Принимает <b>массив и функцию</b>. Bозвращает <b>наибольшее число</b> результату применения функции
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.maxBy-code",
        language: "ts",
        children: `const maxBy = _.maxBy([{ a: 0 }, { a: 3 }]);
console.log(maxBy, (value) => value.a); // 3;`,
      },
    },
    {
      type: "description",
      description: {
        id: "_.maxBy-description",
        children: <>Вместо функции можно передать ключ</>,
      },
    },
    {
      type: "code",
      code: {
        id: "_.maxBy-code",
        language: "ts",
        children: `const maxBy = _.maxBy([{ a: 0 }, { a: 3 }]);
console.log(maxBy, "a"); // 3;`,
      },
    },
  ],
};

export default maxBy;
