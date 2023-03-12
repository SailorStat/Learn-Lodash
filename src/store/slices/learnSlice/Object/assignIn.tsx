import React from "react";
import { RuleProps } from "@src/components/Rule";

const assignIn: RuleProps = {
  id: "_.assignIn",
  blocks: [
    {
      type: "title",
      title: { id: "_.assignIn-title", children: "_.assignIn" },
    },
    {
      type: "description",
      description: {
        id: "_.assignIn-description",
        children: (
          <>
            Принимает <b>объекты</b>. Bозвращает <b>объект</b> из всех строковых свойств и унаследованных у переданных
            объектов. Повторяющиеся свойства перезаписываются справа налево
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.assignIn-code",
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

const assignedIn = _.assignIn({ a: 3 }, new ObjA, new ObjB);
console.log(assignedIn); //{ a: 4, b: 4, d: 1, c: 3 };`,
      },
    },
  ],
};

export default assignIn;
