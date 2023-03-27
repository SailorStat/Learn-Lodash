import React from "react";
import { RuleProps } from "@src/components/Rule";

const commitProto: RuleProps = {
  id: "_.prototype.commit",
  blocks: [
    {
      type: "title",
      title: { id: "_.prototype.commit", children: "_.prototype.commit" },
    },
    {
      type: "description",
      description: {
        id: "_.prototype.commit-description",
        children: (
          <>
            Применяется <b>для значений, обёрнутых в _()</b>. Выполняет цепочку и записывает результат в изначальную
            переменную
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.prototype.commit-code",
        language: "ts",
        children: `let users = [
  { user: "barney", age: 36 },
  { user: "fred", age: 40 },
  { user: "pebbles", age: 1 },
];

_.chain(users).push({ user: "bobka", age: 17 }).head().commit();

console.log(users); // [
//   { user: "barney", age: 36 },
//   { user: "fred", age: 40 },
//   { user: "pebbles", age: 1 },
//   { user: "bobka", age: 17 },
// ];`,
      },
    },
  ],
};

export default commitProto;
