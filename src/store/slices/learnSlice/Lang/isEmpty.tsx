import React from "react";
import { RuleProps } from "@src/components/Rule";

const isEmpty: RuleProps = {
  id: "_.isEmpty",
  blocks: [
    {
      type: "title",
      title: { id: "_.isEmpty-title", children: "_.isEmpty" },
    },
    {
      type: "description",
      description: {
        id: "_.isEmpty-description",
        children: (
          <>
            Принимает <b>значениe</b>, возвращает <b>true</b>, если значение не имеет вложенных значений. Иначе функция
            вернёт <b>false</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.isEmpty-code",
        language: "ts",
        children: `const isLikeEmpty = _.isEmpty(document.body.children);
console.log(isLikeEmpty); // false;

const isLikeEmpty2 = _.isEmpty([]);
console.log(isLikeEmpty2); // true;

const isLikeEmpty3 = _.isEmpty(null);
console.log(isLikeEmpty3); // true;`,
      },
    },
  ],
};

export default isEmpty;
