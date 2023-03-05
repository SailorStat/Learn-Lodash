import React from "react";
import { RuleProps } from "@src/components/Rule";

const isArrayLikeObject: RuleProps = {
  id: "_.isArrayLikeObject",
  blocks: [
    {
      type: "title",
      title: { id: "_.isArrayLikeObject-title", children: "_.isArrayLikeObject" },
    },
    {
      type: "description",
      description: {
        id: "_.isArrayLikeObject-description",
        children: (
          <>
            Принимает <b>значениe</b>, возвращает <b>true</b>, если значение массивоподобный объект. Иначе функция
            вернёт <b>false</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.isArrayLikeObject-code",
        language: "ts",
        children: `const isArr = _.isArrayLikeObject([1, 2, 4]);
console.log(isArr); // true;

const isArr2 = _.isArrayLikeObject(3);
console.log(isArr2); // false;

const isArr3 = _.isArrayLikeObject(document.body.children);
console.log(isArr3); // true;

const isArr4 = _.isArrayLikeObject("Lal");
console.log(isArr4); // false;`,
      },
    },
  ],
};

export default isArrayLikeObject;
