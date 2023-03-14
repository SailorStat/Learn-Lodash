import React from "react";
import { RuleProps } from "@src/components/Rule";

const forOwn: RuleProps = {
  id: "_.forOwn",
  blocks: [
    {
      type: "title",
      title: { id: "_.forOwn-title", children: "_.forOwn" },
    },
    {
      type: "description",
      description: {
        id: "_.forOwn-description",
        children: (
          <>
            Принимает <b>объект и функцию</b>. Выполняет функцию для каждого собственного значения
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.forOwn-code",
        language: "ts",
        children: `function BaseObject() {
  this.a = { b: 1, c: 3 };
  this.b = { b: 2, c: 2 };
}

BaseObject.prototype.d = 3;

_.forOwn(new BaseObject, (value, key) => {
  console.log([value, key]);
});
// [{ b: 1, c: 3 }, "a"];
// [{ b: 2, c: 2 }, "b"];`,
      },
    },
  ],
};

export default forOwn;
