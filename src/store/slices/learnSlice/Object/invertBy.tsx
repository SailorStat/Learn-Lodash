import React from "react";
import { RuleProps } from "@src/components/Rule";

const invertBy: RuleProps = {
  id: "_.invertBy",
  blocks: [
    {
      type: "title",
      title: { id: "_.invertBy-title", children: "_.invertBy" },
    },
    {
      type: "description",
      description: {
        id: "_.invertBy-description",
        children: (
          <>
            Принимает <b>объект и функцию преобразования ключей</b>. Возвращает <b>объект</b>, в котором изменены
            местами ключи и значения. Для новых новых ключей применяется функция преобразования, для значений
            возвращается коллекция
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.invertBy-code",
        language: "ts",
        children: `const baseObject = { a: 1, b: 2, c: 1 };

const invertedBy = _.invertBy(baseObject);
console.log(invertedBy); // { 1: ["a", "c"], 2: ["b"] };

const invertedBy2 = _.invertBy(baseObject, (key) => "key" + key);
console.log(invertedBy2); // { "key1": ["a", "c"], "key2": ["b"] };`,
      },
    },
  ],
};

export default invertBy;
