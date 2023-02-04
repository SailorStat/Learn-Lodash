import React from "react";
import _ from "lodash";

import { RuleProps } from "../../components/Rule";

const def: RuleProps = {
  id: "_.def",
  blocks: [
    {
      type: "title",
      title: { id: "_.def-title", children: "_.def" },
    },
    {
      type: "description",
      description: {
        id: "_.def-description",
        children: (
          <>
            Принимает{" "}
            <b>
              массив и значение <i>N</i>
            </b>
            , возвращает{" "}
            <b>
              массив без первых <i>N</i> значений
            </b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.def-code",
        language: "ts",
        children: `const defArray = [1, 2, 3, 4];

const defped = _.def(defArray);
console.log(defped); // [2, 3, 4];

const defpedTwo = _.def(defArray, 2);
console.log(defpedTwo); // [3, 4];`,
      },
    },
  ],
};

export default def;

const baseArray = [
  { a: 3, b: 1 },
  { a: 0, b: 5 },
  { a: 3, b: 2 },
  { a: 3, b: 1 },
];

const droppedWhile = _.dropWhile(baseArray, "a");
console.log(droppedWhile); // [{ a: 0, b: 5 }, { a: 3, b: 2 }, { a: 3, b: 1 }];
