import React from "react";
import { RuleProps } from "@src/components/Rule";

const defaultsDeep: RuleProps = {
  id: "_.defaultsDeep",
  blocks: [
    {
      type: "title",
      title: { id: "_.defaultsDeep-title", children: "_.defaultsDeep" },
    },
    {
      type: "description",
      description: {
        id: "_.defaultsDeep-description",
        children: (
          <>
            Принимает <b>объекты</b>. Bозвращает <b>объект</b>, который наследуется от всех объектов, рекурсивно
            добавляя свойства без перезаписи
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.defaultsDeep-code",
        language: "ts",
        children: `const defaultedDeep = _.defaultsDeep({ a: { b: 2 } }, { a: { b: 1, c: 3 } });
console.log(defaultedDeep); // { a: { b: 2, c: 3 } };`,
      },
    },
  ],
};

export default defaultsDeep;
