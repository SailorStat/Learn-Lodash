import React from "react";
import { RuleProps } from "@src/components/Rule";

const keys: RuleProps = {
  id: "_.keys",
  blocks: [
    {
      type: "title",
      title: { id: "_.keys-title", children: "_.keys" },
    },
    {
      type: "description",
      description: {
        id: "_.keys-description",
        children: (
          <>
            Принимает <b>объект</b>. Возвращает <b>массив</b> собственных ключей
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.keys-code",
        language: "ts",
        children: `function BaseObject() {
  this.f1 = { a: { c: 1 }, b: 1 };
  this.f2 = { a: { c: 0 }, b: 5 };
  this.f3 = { a: { c: 5 }, b: 2 };
};

BaseObject.prototype.f4 = { a: { c: 3 }, b: 1 };

const keys = _.keys(new BaseObject);
console.log(keys); // ["f1", "f2", "f3"];`,
      },
    },
  ],
};

export default keys;
