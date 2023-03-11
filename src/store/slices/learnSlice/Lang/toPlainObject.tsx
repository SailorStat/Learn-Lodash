import React from "react";
import { RuleProps } from "@src/components/Rule";

const toPlainObject: RuleProps = {
  id: "_.toPlainObject",
  blocks: [
    {
      type: "title",
      title: { id: "_.toPlainObject-title", children: "_.toPlainObject" },
    },
    {
      type: "description",
      description: {
        id: "_.toPlainObject-description",
        children: (
          <>
            Принимает <b>значение</b>, возвращает <b>объект</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.toPlainObject-code",
        language: "ts",
        children: `const plainObject = _.toPlainObject(1);
console.log(plainObject); // {};

const plainObject2 = _.toPlainObject("3.2");
console.log(plainObject2); // {
//   "0": "3",
//   "1": ".",
//   "2": "2",
//   splice: (i, remove, add) => {},
// };`,
      },
    },
  ],
};

export default toPlainObject;
