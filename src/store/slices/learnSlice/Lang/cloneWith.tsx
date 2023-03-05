import React from "react";
import { RuleProps } from "@src/components/Rule";

const cloneWith: RuleProps = {
  id: "_.cloneWith",
  blocks: [
    {
      type: "title",
      title: { id: "_.cloneWith-title", children: "_.cloneWith" },
    },
    {
      type: "description",
      description: {
        id: "_.cloneWith-description",
        children: (
          <>
            Принимает <b>значение и функцию</b>, после применения функции к каждому значению возвращает{" "}
            <b>глубокую копию</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.cloneWith-code",
        language: "ts",
        children: `const customizer = (value: HTMLElement) => {
  if (_.isElement(value)) {
    return value.cloneNode(true);
  }
};

const clonedDeepWith = _.cloneWith(document.body, customizer);

console.log(clonedDeepWith === document.body); // false;`,
      },
    },
  ],
};

export default cloneWith;
