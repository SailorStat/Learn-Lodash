import React from "react";
import { RuleProps } from "@src/components/Rule";

const valuesIn: RuleProps = {
  id: "_.valuesIn",
  blocks: [
    {
      type: "title",
      title: { id: "_.valuesIn-title", children: "_.valuesIn" },
    },
    {
      type: "description",
      description: {
        id: "_.valuesIn-description",
        children: (
          <>
            Принимает <b>объект</b>. Возвращает <b>массив</b> значений собственных и унаследованных перечисляемых
            свойств
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.valuesIn-code",
        language: "ts",
        children: `function BaseObject() {
  this.a = { b: 1, c: 3 };
  this.b = { b: 2, c: 2 };
}

BaseObject.prototype.d = 3;

const valuesIn = _.valuesIn(new BaseObject);
console.log(valuesIn); // [{ b: 1, c: 3 }, { b: 2, c: 2 }, 3];`,
      },
    },
  ],
};

export default valuesIn;
