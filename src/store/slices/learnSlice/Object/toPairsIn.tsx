import React from "react";
import { RuleProps } from "@src/components/Rule";

const toPairsIn: RuleProps = {
  id: "_.toPairsIn",
  blocks: [
    {
      type: "title",
      title: { id: "_.toPairsIn-title", children: "_.toPairsIn" },
    },
    {
      type: "description",
      description: {
        id: "_.toPairsIn-description",
        children: (
          <>
            Принимает <b>объект</b>. Bозвращает <b>массив</b>, который содержит массивы с парой ключ-значение для
            собственных и унаследованных свойств
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.toPairsIn-code",
        language: "ts",
        children: `function BaseObject() {
  this.a = { b: 1, c: 3 };
}

BaseObject.prototype.d = 3;

const pair = _.toPairsIn(new BaseObject);
console.log(pair); // [["a", { b: 2, c: 3 }], ["d", 3]];`,
      },
    },
  ],
};

export default toPairsIn;
