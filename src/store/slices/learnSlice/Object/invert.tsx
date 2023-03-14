import React from "react";
import { RuleProps } from "@src/components/Rule";

const invert: RuleProps = {
  id: "_.invert",
  blocks: [
    {
      type: "title",
      title: { id: "_.invert-title", children: "_.invert" },
    },
    {
      type: "description",
      description: {
        id: "_.invert-description",
        children: (
          <>
            Принимает <b>объект</b>. Возвращает <b>объект</b>, меняя местами ключи и значения. Новая пара ключ-значение
            перезапишет имеющийся ключ при повторении
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.invert-code",
        language: "ts",
        children: `const baseObject = { a: 1, b: 2, c: 1 };

const inverted = _.invert(baseObject);
console.log(inverted); // { "1": "c", "2": "b" };`,
      },
    },
  ],
};

export default invert;
