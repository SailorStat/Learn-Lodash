import React from "react";
import { RuleProps } from "@src/components/Rule";

const tap: RuleProps = {
  id: "_.tap",
  blocks: [
    {
      type: "title",
      title: { id: "_.tap", children: "_.tap" },
    },
    {
      type: "description",
      description: {
        id: "_.tap-description",
        children: (
          <>
            Приниамет <b>значение и обработчик</b>. Bозвращает <b>объект</b> который может последоватьльно использовать
            методы
            <div>Применяется, чтобы изменить состояние значения через мутацию</div>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.tap-code",
        language: "ts",
        children:
          `const users = [
  { user: "barney", age: 36 },
  { user: "fred", age: 40 },
  { user: "pebbles", age: 1 },
];

const youngest = _(users)
  .tap((users) => {
    users.unshift({ user: "bobka", age: 17 })
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

export default tap;
