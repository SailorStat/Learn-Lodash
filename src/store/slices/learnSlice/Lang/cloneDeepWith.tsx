import React from "react";
import { RuleProps } from "@src/components/Rule";

const cloneDeepWith: RuleProps = {
  id: "_.cloneDeepWith",
  blocks: [
    {
      type: "title",
      title: { id: "_.cloneDeepWith-title", children: "_.cloneDeepWith" },
    },
    {
      type: "description",
      description: {
        id: "_.cloneDeepWith-description",
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
        id: "_.cloneDeepWith-code",
        language: "ts",
        children: `const customizer = (value: HTMLElement) => {
  if (_.isElement(value)) {
    return value.cloneNode(true);
  }
};

const clonedDeepWith = _.cloneDeepWith(document.body, customizer);

console.log(clonedDeepWith === document.body); // false;`,
      },
    },
  ],
};

export default cloneDeepWith;
