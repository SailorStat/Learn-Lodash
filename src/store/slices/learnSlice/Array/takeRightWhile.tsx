import React from "react";
import { RuleProps } from "@src/components/Rule";

const takeRightWhile: RuleProps = {
  id: "_.takeRightWhile",
  blocks: [
    {
      type: "title",
      title: { id: "_.takeRightWhile-title", children: "_.takeRightWhile" },
    },
    {
      type: "description",
      description: {
        id: "_.takeRightWhile-description",
        children: (
          <>
            Принимает
            <b>массив и фильтр</b>, возвращает <b>массив</b> из значений c конца, фильтр для которых вернёт{" "}
            <b>== true</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.takeRightWhile-code",
        language: "ts",
        children: `const baseArray = [1, 2, 3, 5, 8, 13];

const takedRightWhile = _.takeRightWhile(baseArray, (value) => value % 3);
console.log(takedRightWhile); // [5, 8, 13];`,
      },
    },
    {
      type: "description",
      description: {
        id: "_.takeRightWhile2-description",
        children: (
          <>
            Фильтр по объекту проводит <b>глубокое сравнение по значению</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.takeRightWhile2-code",
        language: "ts",
        children: `const baseArray = [
  { a: { c: 3 }, b: 1 },
  { a: { c: 0 }, b: 5 },
  { a: { c: 3 }, b: 2 },
  { a: { c: 3 }, b: 1 },
];

const takedRightWhile = _.takeRightWhile(baseArray, { a: { c: 3 } });
console.log(takedRightWhile); // [{ a: { c: 3 }, b: 2 }, { a: { c: 3 }, b: 1 }];`,
      },
    },
    {
      type: "description",
      description: {
        id: "_.takeRightWhile3-description",
        children: (
          <>
            Фильтр по массиву принмает <b>первое значение, как ключ, второе, как значение</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.takeRightWhile3-code",
        language: "ts",
        children: `const baseArray = [
  { a: { c: 3 }, b: 1 },
  { a: { c: 0 }, b: 5 },
  { a: { c: 3 }, b: 2 },
  { a: { c: 3 }, b: 1 },
];

const takedRightWhile = _.takeRightWhile(baseArray, ["a", { c: 3 }]);
console.log(takedRightWhile); // [{ a: { c: 3 }, b: 2 }, { a: { c: 3 }, b: 1 }];`,
      },
    },
    {
      type: "description",
      description: {
        id: "_.takeRightWhile4-description",
        children: (
          <>
            Фильтр по строке возвращает с конца, <b>до первого значения == false</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.takeRightWhile4-code",
        language: "ts",
        children: `const baseArray = [
  { a: 3, b: 1 },
  { a: 0, b: 5 },
  { a: 3, b: 2 },
  { a: 3, b: 1 },
];

const takedRightWhile = _.takeRightWhile(baseArray, "a");
console.log(takedRightWhile); // [{ a: 3, b: 2 }, { a: 3, b: 1 }];`,
      },
    },
  ],
};

export default takeRightWhile;
