import React from "react";
import { RuleProps } from "@src/components/Rule";

const isElement: RuleProps = {
  id: "_.isElement",
  blocks: [
    {
      type: "title",
      title: { id: "_.isElement-title", children: "_.isElement" },
    },
    {
      type: "description",
      description: {
        id: "_.isElement-description",
        children: (
          <>
            Принимает <b>значениe</b>, возвращает <b>true</b>, если значение типа Element. Иначе функция вернёт{" "}
            <b>false</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.isElement-code",
        language: "ts",
        children: `const isLikeElement = _.isElement(document.body);
console.log(isLikeElement); // true;

const isLikeElement2 = _.isElement(<span>123</span>);
console.log(isLikeElement2); // false;`,
      },
    },
  ],
};

export default isElement;
