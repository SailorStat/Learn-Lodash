import React from "react";
import { RuleProps } from "@src/components/Rule";

const fromPairsToPairs: RuleProps = {
  id: "_.fromPairs, _.toPairs",
  blocks: [
    {
      type: "title",
      title: { id: "_.fromPairs-title, _.toPairs-title", children: "_.fromPairs, _.toPairs" },
    },
    {
      type: "description",
      description: {
        id: "_.fromPairs-description",
        children: (
          <>
            <b>
              <i>_.fromPairs</i>
            </b>
            : Принимает <b>массив из массивов с двумя значениями</b>, возвращает <b>объект</b>
          </>
        ),
      },
    },
    {
      type: "description",
      description: {
        id: "_.toPairs-description",
        children: (
          <>
            <b>
              <i>_.toPairs</i>
            </b>
            : Принимает <b>объект</b>, возвращает <b>массив из массивов с двумя значениями</b>
          </>
        ),
      },
    },
    {
      type: "comparisonCode",
      comparisonCode: {
        id: "_.fromPairs-comparisonCode, _.toPairs-comparisonCode",
        codesProps: [
          {
            language: "ts",
            id: "_.toPairs-comparisonCode",
            children: `const baseArray = [
  ["c", [["a", "3"], ["b", "1"]]],
  ["d", [["a", "0"], ["b", "5"]]],
  ["f", [["a", "3"], ["b", "2"]]],
  ["g", [["a", "3"], ["b", "1"]]],
];

const toPairs = _.fromPairs(baseArray);
console.log(toPairs);
/* {
  "c": [["a", "3"], ["b", "1"]],
  "d": [["a", "0"], ["b", "5"]],
  "f": [["a", "3"], ["b", "2"]],
  "g": [["a", "3"], ["b", "1"]]
};*/`,
          },
          {
            id: "_.fromPairs-comparisonCode",
            language: "ts",
            children: `const baseObject = {
  c: { a: 3, b: 1 },
  d: { a: 0, b: 5 },
  f: { a: 3, b: 2 },
  g: { a: 3, b: 1 },
};

const toPairs = _.toPairs(baseObject);
console.log(toPairs);
/* [
  ["c", { a: 3, b: 1 }],
  ["d", { a: 0, b: 5 }],
  ["f", { a: 3, b: 2 }],
  ["g", { a: 3, b: 1 }],
];*/`,
          },
        ],
      },
    },
  ],
};

export default fromPairsToPairs;
