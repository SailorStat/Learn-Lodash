import React from "react";
import { RuleProps } from "@src/components/Rule";

const cond: RuleProps = {
  id: "_.cond",
  blocks: [
    {
      type: "title",
      title: { id: "_.cond-title", children: "_.cond" },
    },
    {
      type: "description",
      description: {
        id: "_.cond-description",
        children: (
          <>
            Принимает <b>массив пар проверка - результат</b>. Bозвращает <b>функцию</b>, которая принимает значение и
            возвращает соответствующий результат
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.cond-code",
        language: "ts",
        children: `const func = _.cond([
  [_.matches({ a: 1 }), _.constant("matches A")],
  [_.conforms({ b: _.isNumber }), _.constant("matches B")],
  [_.stubTrue, _.constant("no match")],
]);

console.log(func({ a: 1, b: 2 })); // "matches A";

console.log(func({ a: 0, b: 1 })); // "matches B";

console.log(func({ a: "1", b: "2" })); // "no match";`,
      },
    },
  ],
};

export default cond;
