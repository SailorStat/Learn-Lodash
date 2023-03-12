import React from "react";
import { RuleProps } from "@src/components/Rule";

const defaults: RuleProps = {
  id: "_.defaults",
  blocks: [
    {
      type: "title",
      title: { id: "_.defaults-title", children: "_.defaults" },
    },
    {
      type: "description",
      description: {
        id: "_.defaults-description",
        children: (
          <>
            Принимает <b>объекты</b>. Bозвращает <b>объект</b>, который наследуется от всех объектов. При этом
            назначенные свойства не перезаписываются
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.defaults-code",
        language: "ts",
        children: `function ObjA() {
  this.b = 2;
}

function ObjB() {
  this.b = 4;
  this.c = 3;
}

ObjA.prototype.d = 1;
ObjB.prototype.a = 4;

const defaulted = _.defaults({ a: 3 }, new ObjA(), new ObjB());
console.log(defaulted); // { a: 3, b: 2, d: 1, c: 3 };`,
      },
    },
  ],
};

export default defaults;
