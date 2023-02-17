import React from "react";
import { RuleProps } from "@src/components/Rule";

const invokeMap: RuleProps = {
  id: "_.invokeMap",
  blocks: [
    {
      type: "title",
      title: { id: "_.invokeMap-title", children: "_.invokeMap" },
    },
    {
      type: "description",
      description: {
        id: "_.invokeMap-description",
        children: (
          <>
            Принимает <b>любое значение, функцию или метод и аргументы</b>, возвращает <b>массив</b> результатов вызова
            функции у каждого элемента переданного значения с переданными аргументами
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.invokeMap-code",
        language: "ts",
        children: `const invokedMap = _.invokeMap(["1.3", "1.2", "4.5", "4.6"], [].concat, "123");
console.log(invokedMap); // [
//   ["1.3", "123"],
//   ["1.2", "123"],
//   ["4.5", "123"],
//   ["4.6", "123"],
// ];`,
      },
    },
  ],
};

export default invokeMap;
