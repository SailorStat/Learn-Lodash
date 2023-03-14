import React from "react";
import { RuleProps } from "@src/components/Rule";

const toPairs: RuleProps = {
  id: "_.toPairs",
  blocks: [
    {
      type: "title",
      title: { id: "_.toPairs-title", children: "_.toPairs" },
    },
    {
      type: "description",
      description: {
        id: "_.toPairs-description",
        children: (
          <>
            Принимает <b>объект</b>. Bозвращает <b>массив</b>, который содержит массивы с парой ключ-значение для
            собственных свойств
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.toPairs-code",
        language: "ts",
        children: `function BaseObject() {
  this.a = { b: 1, c: 3 };
}

BaseObject.prototype.d = 3;

const pair = _.toPairs(new BaseObject);
console.log(pair); // [["a", { b: 2, c: 3 }]];`,
      },
    },
  ],
};

export default toPairs;
