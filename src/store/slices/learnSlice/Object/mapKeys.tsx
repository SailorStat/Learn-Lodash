import React from "react";
import { RuleProps } from "@src/components/Rule";

const mapKeys: RuleProps = {
  id: "_.mapKeys",
  blocks: [
    {
      type: "title",
      title: { id: "_.mapKeys-title", children: "_.mapKeys" },
    },
    {
      type: "description",
      description: {
        id: "_.mapKeys-description",
        children: (
          <>
            Принимает <b>объект и функцию преобразования</b>. Возвращает <b>объект</b> с ключами после преобразования
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.mapKeys-code",
        language: "ts",
        children: `const baseObject = { a: { c: 1 }, b: 2 };

const mapedKeys = _.mapKeys(baseObject, (value, key) => key + key + (value?.c || value));
console.log(mapedKeys); // { aa1: { c: 1 }, bb2: 2 };`,
      },
    },
  ],
};

export default mapKeys;
