import React from "react";
import { RuleProps } from "@src/components/Rule";

const mapValues: RuleProps = {
  id: "_.mapValues",
  blocks: [
    {
      type: "title",
      title: { id: "_.mapValues-title", children: "_.mapValues" },
    },
    {
      type: "description",
      description: {
        id: "_.mapValues-description",
        children: (
          <>
            Принимает <b>объект и функцию преобразования</b>. Возвращает <b>объект</b> с преобразованными значениями
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.mapValues-code",
        language: "ts",
        children: `const baseObject = { a: { c: 1 }, b: 2 };

const mapedValues = _.mapValues(baseObject, (value, key) => key + key + (value?.c || value));
console.log(mapedValues); // { a: "aa1", b: "bb2" };`,
      },
    },
  ],
};

export default mapValues;
