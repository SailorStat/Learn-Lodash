import React from "react";
import { RuleProps } from "@src/components/Rule";

const pickBy: RuleProps = {
  id: "_.pickBy",
  blocks: [
    {
      type: "title",
      title: { id: "_.pickBy-title", children: "_.pickBy" },
    },
    {
      type: "description",
      description: {
        id: "_.pickBy-description",
        children: (
          <>
            Принимает <b>объект и функцию преобразования</b>. Возвращает <b>объект</b> из свойств для которых функция
            преобразования вернула <b>== true</b>
            <div>
              <b>Неочевидное поведение. В примере ниже ожидалось {"{ a: { }, d: undefined }"}</b>
            </div>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.pickBy-code",
        language: "ts",
        children: `const baseObject = { a: { c: 1 }, b: 2, d: undefined };

const pickedBy = _.pickBy(baseObject, (value) => !value || _.isObject(value));
console.log(pickedBy); // { a: { c: 1 }, d: undefined };`,
      },
    },
  ],
};

export default pickBy;
