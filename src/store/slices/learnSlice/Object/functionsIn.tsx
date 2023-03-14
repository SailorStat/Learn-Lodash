import React from "react";
import { RuleProps } from "@src/components/Rule";

const functionsIn: RuleProps = {
  id: "_.functionsIn",
  blocks: [
    {
      type: "title",
      title: { id: "_.functionsIn-title", children: "_.functionsIn" },
    },
    {
      type: "description",
      description: {
        id: "_.functionsIn-description",
        children: (
          <>
            Принимает <b>объект</b>. Возвращает <b>массив</b> ключей собственных унаследованных неизменяемых свойств
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.functionsIn-code",
        language: "ts",
        children: `function BaseObject() {
  this.a = _.constant({ b: 1, c: 3 });
  this.b = _.constant({ b: 2, c: 2 });
}

BaseObject.prototype.d = _.constant(3);

const functionedIn = _.functionsIn(new BaseObject);
console.log(functionedIn); // ["a", "b", "с"];`,
      },
    },
  ],
};

export default functionsIn;
