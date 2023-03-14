import React from "react";
import { RuleProps } from "@src/components/Rule";

const forInRight: RuleProps = {
  id: "_.forInRight",
  blocks: [
    {
      type: "title",
      title: { id: "_.forInRight-title", children: "_.forInRight" },
    },
    {
      type: "description",
      description: {
        id: "_.forInRight-description",
        children: (
          <>
            Принимает <b>объект и функцию</b>. Выполняет функцию для каждого собственного и унаследованного значения,
            начиная с конца
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.forInRight-code",
        language: "ts",
        children: `function BaseObject() {
  this.a = { b: 1, c: 3 };
}

BaseObject.prototype.d = 3;

_.forInRight(new BaseObject, (value, key) => {
  console.log([value, key]);
});
// [3, "d"];
// [{ b: 1, c: 3 }, "a"];`,
      },
    },
  ],
};

export default forInRight;
