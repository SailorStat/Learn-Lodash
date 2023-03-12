import React from "react";
import { RuleProps } from "@src/components/Rule";

const assignInWith: RuleProps = {
  id: "_.assignInWith",
  blocks: [
    {
      type: "title",
      title: { id: "_.assignInWith-title", children: "_.assignInWith" },
    },
    {
      type: "description",
      description: {
        id: "_.assignInWith-description",
        children: (
          <>
            Принимает <b>объекты и обработчик</b>. Bозвращает <b>объект</b> из всех строковых свойств и унаследованных у
            переданных объектов после применнения обработчика
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.assignInWith-code",
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
const assignedIn = _.assignInWith({ a: 4 }, new ObjA, new ObjB, (a, b) => _.max([a, b]));
console.log(assignedIn); // { a: 4, b: 4, d: 1, c: 3 };`,
      },
    },
  ],
};

export default assignInWith;
