import React from "react";
import { RuleProps } from "@src/components/Rule";

const values: RuleProps = {
  id: "_.values",
  blocks: [
    {
      type: "title",
      title: { id: "_.values-title", children: "_.values" },
    },
    {
      type: "description",
      description: {
        id: "_.values-description",
        children: (
          <>
            Принимает <b>объект</b>. Возвращает <b>массив</b> значений собственных перечисляемых свойств
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.values-code",
        language: "ts",
        children: `function BaseObject() {
  this.a = { b: 1, c: 3 };
  this.b = { b: 2, c: 2 };
}

BaseObject.prototype.d = 3;

const values = _.values(new BaseObject);
console.log(values); // [{ b: 1, c: 3 }, { b: 2, c: 2 }];`,
      },
    },
  ],
};

export default values;
