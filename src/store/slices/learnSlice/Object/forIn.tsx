import React from "react";
import { RuleProps } from "@src/components/Rule";

const forIn: RuleProps = {
  id: "_.forIn",
  blocks: [
    {
      type: "title",
      title: { id: "_.forIn-title", children: "_.forIn" },
    },
    {
      type: "description",
      description: {
        id: "_.forIn-description",
        children: (
          <>
            Принимает <b>объект и функцию</b>. Выполняет функцию для каждого собственного и унаследованного значения
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.forIn-code",
        language: "ts",
        children: `function BaseObject() {
  this.a = { b: 1, c: 3 };
}

BaseObject.prototype.d = 3;

_.forIn(new BaseObject, (value, key) => {
  console.log([value, key]);
});
// [{ b: 1, c: 3 }, "a"];
// [3, "d"];`,
      },
    },
  ],
};

export default forIn;
