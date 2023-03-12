import React from "react";
import { RuleProps } from "@src/components/Rule";

const assign: RuleProps = {
  id: "_.assign",
  blocks: [
    {
      type: "title",
      title: { id: "_.assign-title", children: "_.assign" },
    },
    {
      type: "description",
      description: {
        id: "_.assign-description",
        children: (
          <>
            Принимает <b>объекты</b>. Bозвращает <b>объект</b> из всех строковых свойств переданных объектов.
            Повторяющиеся свойства перезаписываются справа налево
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.assign-code",
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

const assignedIn = _.assign({ a: 3 }, new ObjA, new ObjB);
console.log(assigned); // { a: 3, b: 4, c: 3 };`,
      },
    },
  ],
};

export default assign;
