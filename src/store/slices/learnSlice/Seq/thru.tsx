import React from "react";
import { RuleProps } from "@src/components/Rule";

const thru: RuleProps = {
  id: "_.thru",
  blocks: [
    {
      type: "title",
      title: { id: "_.thru", children: "_.thru" },
    },
    {
      type: "description",
      description: {
        id: "_.thru-description",
        children: (
          <>
            Принимает <b>значение и обработчик</b>. Bозвращает <b>объект</b> который может последоватьльно использовать
            методы
            <div>Применяется, чтобы изменить состояние значения через возврат значения</div>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.thru-code",
        language: "ts",
        children:
          `const users = [
  { user: "barney", age: 36 },
  { user: "fred", age: 40 },
  { user: "pebbles", age: 1 },
];

const youngest = _(users)
  .thru((users) => {
    return [{ user: "bobka", age: 17 }, ...users]
  })
  .sortBy("age")
  .map(({ user, age }) => ` +
          "`${user} is ${age}`" +
          `)
  .head()
  .value();

console.log(youngest); // "bobka is 17";`,
      },
    },
  ],
};

export default thru;
