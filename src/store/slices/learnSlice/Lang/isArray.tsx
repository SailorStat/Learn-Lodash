import React from "react";
import { RuleProps } from "@src/components/Rule";

const isArray: RuleProps = {
  id: "_.isArray",
  blocks: [
    {
      type: "title",
      title: { id: "_.isArray-title", children: "_.isArray" },
    },
    {
      type: "description",
      description: {
        id: "_.isArray-description",
        children: (
          <>
            Принимает <b>значениe</b>, возвращает <b>true</b>, если значение - это массив. Иначе функция вернёт{" "}
            <b>false</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.isArray-code",
        language: "ts",
        children: `const isArr = _.isArray([1, 2, 4]);
console.log(isArr); // true;

const isArr2 = _.isArray(3);
console.log(isArr2); // false;

const isArr3 = _.isArray(document.body.children);
console.log(isArr3); // false;`,
      },
    },
  ],
};

export default isArray;
