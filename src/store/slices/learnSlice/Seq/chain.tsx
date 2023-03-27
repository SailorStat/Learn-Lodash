import React from "react";
import { RuleProps } from "@src/components/Rule";

const chain: RuleProps = {
  id: "_.chain",
  blocks: [
    {
      type: "title",
      title: { id: "_.chain", children: "_.chain" },
    },
    {
      type: "description",
      description: {
        id: "_.chain-description",
        children: (
          <>
            Приниамет <b>значение</b>. Bозвращает <b>объект</b> который может последоватьльно использовать методы
            <div>
              Чтобы вернуть значение, надо использовать <b>.value()</b>
            </div>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.chain-code",
        language: "ts",
        children:
          `const users = [
  { user: "barney", age: 36 },
  { user: "fred", age: 40 },
  { user: "pebbles", age: 1 },
];

const youngest = _
  .chain(users)
  .sortBy("age")
  .map(({ user, age }) => ` +
          "`${user} is ${age}`" +
          `)
  .head()
  .value();

console.log(youngest); // "pebbles is 1";`,
      },
    },
  ],
};

export default chain;
