import React from "react";
import { RuleProps } from "@src/components/Rule";

const functions: RuleProps = {
  id: "_.functions",
  blocks: [
    {
      type: "title",
      title: { id: "_.functions-title", children: "_.functions" },
    },
    {
      type: "description",
      description: {
        id: "_.functions-description",
        children: (
          <>
            Принимает <b>объект</b>. Возвращает <b>массив</b> ключей собственных неизменяемых свойств
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.functions-code",
        language: "ts",
        children: `function BaseObject() {
  this.a = _.constant({ b: 1, c: 3 });
  this.b = _.constant({ b: 2, c: 2 });
}

BaseObject.prototype.d = _.constant(3);

const functioned = _.functions(new BaseObject);
console.log(functioned); // ["a", "b"];`,
      },
    },
  ],
};

export default functions;
