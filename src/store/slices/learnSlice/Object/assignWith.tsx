import React from "react";
import { RuleProps } from "@src/components/Rule";

const assignWith: RuleProps = {
  id: "_.assignWith",
  blocks: [
    {
      type: "title",
      title: { id: "_.assignWith-title", children: "_.assignWith" },
    },
    {
      type: "description",
      description: {
        id: "_.assignWith-description",
        children: (
          <>
            Принимает <b>объекты и обработчик</b>. Bозвращает <b>объект</b> из всех строковых свойств переданных
            объектов после применнения обработчика
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.assignWith-code",
        language: "ts",
        children: `function ObjA() {
  this.b = 2;
}

function ObjB() {
  this.b = 4;
  this.c = 3;
}

ObjA.prototype.d = 1;
ObjB.prototype.a = 2;

// eslint-disable-next-line prettier/prettier
const assignedIn = _.assignWith({ a: 4 }, new ObjA, new ObjB, (a, b) => _.max([a, b]));
console.log(assignedIn); // { a: 4, b: 4, c: 3 };`,
      },
    },
  ],
};

export default assignWith;
