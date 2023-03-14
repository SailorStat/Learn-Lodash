import React from "react";
import { RuleProps } from "@src/components/Rule";

const keysIn: RuleProps = {
  id: "_.keysIn",
  blocks: [
    {
      type: "title",
      title: { id: "_.keysIn-title", children: "_.keysIn" },
    },
    {
      type: "description",
      description: {
        id: "_.keysIn-description",
        children: (
          <>
            Принимает <b>объект</b>. Возвращает <b>массив</b> собственных и унаследованных ключей
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.keysIn-code",
        language: "ts",
        children: `function BaseObject() {
  this.f1 = { a: { c: 1 }, b: 1 };
  this.f2 = { a: { c: 0 }, b: 5 };
  this.f3 = { a: { c: 5 }, b: 2 };
};

BaseObject.prototype.f4 = { a: { c: 3 }, b: 1 };

const keysIn = _.keysIn(new BaseObject);
console.log(keysIn); // ["f1", "f2", "f3", "f4"];`,
      },
    },
  ],
};

export default keysIn;
