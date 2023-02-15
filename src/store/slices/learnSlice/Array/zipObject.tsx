import React from "react";
import { RuleProps } from "@src/components/Rule";
const zipObject: RuleProps = {
  id: "_.zipObject",
  blocks: [
    {
      type: "title",
      title: { id: "_.zipObject-title", children: "_.zipObject" },
    },
    {
      type: "description",
      description: {
        id: "_.zipObject-description",
        children: (
          <>
            Принимает <b>два массива</b>, возвращает <b>объект</b>, где ключём является N-ное значение первого массива,
            значением N-ное значение второго массива
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.zipObject-code",
        language: "ts",
        children: `const baseArray = ["a", "b", "c", "d", "e"];
const baseArray2 = [1, 2, 3, 4, 5];

const zipedObject = _.zipObject(baseArray, baseArray2);
console.log(zipedObject); // { a: 1, b: 2, c: 3, d: 4, e: 5 };`,
      },
    },
  ],
};

export default zipObject;
