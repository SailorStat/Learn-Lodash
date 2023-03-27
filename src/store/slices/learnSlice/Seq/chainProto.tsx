import React from "react";
import { RuleProps } from "@src/components/Rule";

const chainProto: RuleProps = {
  id: "_.prototype.chain",
  blocks: [
    {
      type: "title",
      title: { id: "_.prototype.chain", children: "_.prototype.chain" },
    },
    {
      type: "description",
      description: {
        id: "_.prototype.chain-description",
        children: (
          <>
            Применяется <b>для значений, обёрнутых в _()</b>. Bозвращает <b>объект</b> который может последоватьльно
            использовать методы и не будет выброшен результат после возвращения примитива
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
        id: "_.prototype.chain-code",
        language: "ts",
        children:
          `const users = [
  { user: "barney", age: 36 },
  { user: "fred", age: 40 },
  { user: "pebbles", age: 1 },
];

const youngest = _(users)
  .chain()
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

export default chainProto;
