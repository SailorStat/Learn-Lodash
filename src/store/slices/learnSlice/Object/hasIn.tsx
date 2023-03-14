import React from "react";
import { RuleProps } from "@src/components/Rule";

const hasIn: RuleProps = {
  id: "_.hasIn",
  blocks: [
    {
      type: "title",
      title: { id: "_.hasIn-title", children: "_.hasIn" },
    },
    {
      type: "description",
      description: {
        id: "_.hasIn-description",
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
        id: "_.hasIn-code",
        language: "ts",
        children: `function BaseObject() {
  this.f1 = { a: { c: 1 }, b: 1 };
  this.f2 = { a: { c: 0 }, b: 5 };
  this.f3 = { a: { c: 5 }, b: 2 };
};

BaseObject.prototype.f4 = { a: { c: 3 }, b: 1 };

const hasedIn = _.hasIn(new BaseObject, "f3['a'].c");
console.log(hasedIn); // true;

const hasedIn2 = _.hasIn(new BaseObject, ["f4", "a", "c"]);
console.log(hasedIn2); // true;

const hasedIn3 = _.hasIn(new BaseObject, "f5['a'].c");
console.log(hasedIn3); // false;`,
      },
    },
  ],
};

export default hasIn;
