import React from "react";
import { RuleProps } from "@src/components/Rule";

const isArrayLike: RuleProps = {
  id: "_.isArrayLike",
  blocks: [
    {
      type: "title",
      title: { id: "_.isArrayLike-title", children: "_.isArrayLike" },
    },
    {
      type: "description",
      description: {
        id: "_.isArrayLike-description",
        children: (
          <>
            Принимает <b>значениe</b>, возвращает <b>true</b>, если значение массивоподобно. Иначе функция вернёт{" "}
            <b>false</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.isArrayLike-code",
        language: "ts",
        children: `const isArr = _.isArrayLike([1, 2, 4]);
console.log(isArr); // true;

const isArr2 = _.isArrayLike(3);
console.log(isArr2); // false;

const isArr3 = _.isArrayLike(document.body.children);
console.log(isArr3); // true;

const isArr4 = _.isArrayLike("Lal");
console.log(isArr4); // true;`,
      },
    },
  ],
};

export default isArrayLike;
