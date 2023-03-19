import React from "react";
import { RuleProps } from "@src/components/Rule";

const _: RuleProps = {
  id: "_",
  blocks: [
    {
      type: "title",
      title: { id: "_", children: "_" },
    },
    {
      type: "description",
      description: {
        id: "_-description",
        children: (
          <>
            Приниамет <b>значение</b>. Bозвращает <b>объект</b> который может последоватьльно использовать методы
            <div>
              Чтобы вернуть значение, надо использовать <b>.value()</b>
            </div>
            <div>Если результат выполнения будет примитивом, то функция сама прервёт цепочку и вернёт значение</div>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_-code",
        language: "ts",
        children:
          `const users = [
  { user: "barney", age: 36 },
  { user: "fred", age: 40 },
  { user: "pebbles", age: 1 },
];

const youngest = _(users)
  .sortBy("age")
  .map(({ user, age }) => ` +
          "`${user} is ${age}`" +
          `)
  .head();

console.log(youngest); // "pebbles is 1";`,
      },
    },
  ],
};

export default _;
