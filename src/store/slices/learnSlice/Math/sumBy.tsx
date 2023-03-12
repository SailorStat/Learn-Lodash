import React from "react";
import { RuleProps } from "@src/components/Rule";

const sumBy: RuleProps = {
  id: "_.sumBy",
  blocks: [
    {
      type: "title",
      title: { id: "_.sumBy-title", children: "_.sumBy" },
    },
    {
      type: "description",
      description: {
        id: "_.sumBy-description",
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
        id: "_.sumBy-code",
        language: "ts",
        children: `const sumBy = _.sumBy([{ a: 0 }, { a: 3 }, { a: 5 }]);
console.log(sumBy, (value) => value.a); // 8;`,
      },
    },
    {
      type: "description",
      description: {
        id: "_.sumBy-description",
        children: <>Вместо функции можно передать ключ</>,
      },
    },
    {
      type: "code",
      code: {
        id: "_.sumBy-code",
        language: "ts",
        children: `const sumBy = _.sumBy([{ a: 0 }, { a: 3 }, { a: 5 }]);
console.log(sumBy, "a"); // 8;`,
      },
    },
  ],
};

export default sumBy;
