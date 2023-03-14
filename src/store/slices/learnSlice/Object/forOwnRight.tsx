import React from "react";
import { RuleProps } from "@src/components/Rule";

const forOwnRight: RuleProps = {
  id: "_.forOwnRight",
  blocks: [
    {
      type: "title",
      title: { id: "_.forOwnRight-title", children: "_.forOwnRight" },
    },
    {
      type: "description",
      description: {
        id: "_.forOwnRight-description",
        children: (
          <>
            Принимает <b>объект и функцию</b>. Выполняет функцию для каждого собственного значения, начиная с конца
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.forOwnRight-code",
        language: "ts",
        children: `function BaseObject() {
  this.a = { b: 1, c: 3 };
  this.b = { b: 2, c: 2 };
}

BaseObject.prototype.d = 3;

_.forOwnRight(new BaseObject, (value, key) => {
  console.log([value, key]);
});
// [{ b: 2, c: 2 }, "b"];
// [{ b: 1, c: 3 }, "a"];`,
      },
    },
  ],
};

export default forOwnRight;
