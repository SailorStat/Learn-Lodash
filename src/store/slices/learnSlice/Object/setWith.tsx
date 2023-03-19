import React from "react";
import { RuleProps } from "@src/components/Rule";

const setWith: RuleProps = {
  id: "_.setWith",
  blocks: [
    {
      type: "title",
      title: { id: "_.setWith-title", children: "_.setWith" },
    },
    {
      type: "description",
      description: {
        id: "_.setWith-description",
        children: (
          <>
            Принимает <b>объект, путь, значение, функцию преобразования</b>. Возвращает <b>объект</b> с записанным
            значением по указанному пути. Функция преобразования применяется к объекту, у которого будет добавляться
            свойство
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.setWith-code",
        language: "ts",
        children: `const baseObject = { a: { c: 3 }, b: 2 };

const transform = (obj, key, baseObj) => ({
  ..._.mapValues(obj, (value) => value ** value),
});

const seted = _.setWith(baseObject, "a.d", 3, transform);
console.log(seted); // { a: { c: 27, d: 3 }, b: 2 };`,
      },
    },
  ],
};

export default setWith;
