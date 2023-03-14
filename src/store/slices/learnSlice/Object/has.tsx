import React from "react";
import { RuleProps } from "@src/components/Rule";

const has: RuleProps = {
  id: "_.has",
  blocks: [
    {
      type: "title",
      title: { id: "_.has-title", children: "_.has" },
    },
    {
      type: "description",
      description: {
        id: "_.has-description",
        children: (
          <>
            Принимает <b>объект и путь</b>. Возвращает <b>true</b>, если объект содержит такой путь
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.has-code",
        language: "ts",
        children: `function BaseObject() {
  this.f1 = { a: { c: 1 }, b: 1 };
  this.f2 = { a: { c: 0 }, b: 5 };
  this.f3 = { a: { c: 5 }, b: 2 };
};

BaseObject.prototype.f4 = { a: { c: 3 }, b: 1 };

const hased = _.has(new BaseObject, "f3['a'].c");
console.log(hased); // true;

const hased2 = _.has(new BaseObject, ["f4", "a", "c"]);
console.log(hased2); // false;

const hased3 = _.has(new BaseObject, "f5['a'].c");
console.log(hased3); // false;`,
      },
    },
  ],
};

export default has;
