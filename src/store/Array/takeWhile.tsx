import React from "react";
import { RuleProps } from "@src/components/Rule";

const takeWhile: RuleProps = {
  id: "_.takeWhile",
  blocks: [
    {
      type: "title",
      title: { id: "_.takeWhile-title", children: "_.takeWhile" },
    },
    {
      type: "description",
      description: {
        id: "_.takeWhile-description",
        children: (
          <>
            Принимает
            <b>массив и фильтр</b>, возвращает <b>массив</b> из значений c начала, фильтр для которых вернёт{" "}
            <b>== true</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.takeWhile-code",
        language: "ts",
        children: `const baseArray = [1, 2, 3, 5, 8, 13];

const takedWhile = _.takeWhile(baseArray, (value) => value % 3);
console.log(takedWhile); // [1, 2];`,
      },
    },
    {
      type: "description",
      description: {
        id: "_.takeWhile2-description",
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
        id: "_.takeWhile2-code",
        language: "ts",
        children: `const baseArray = [
  { a: { c: 3 }, b: 1 },
  { a: { c: 0 }, b: 5 },
  { a: { c: 3 }, b: 2 },
  { a: { c: 3 }, b: 1 },
];

const takedWhile = _.takeWhile(baseArray, { a: { c: 3 } });
console.log(takedWhile); // [{ a: { c: 3 }, b: 1 }];`,
      },
    },
    {
      type: "description",
      description: {
        id: "_.takeWhile3-description",
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
        id: "_.takeWhile3-code",
        language: "ts",
        children: `const baseArray = [
  { a: { c: 3 }, b: 1 },
  { a: { c: 0 }, b: 5 },
  { a: { c: 3 }, b: 2 },
  { a: { c: 3 }, b: 1 },
];

const takedWhile = _.takeWhile(baseArray, ["a", { c: 3 }]);
console.log(takedWhile); // [{ a: { c: 3 }, b: 1 }];`,
      },
    },
    {
      type: "description",
      description: {
        id: "_.takeWhile4-description",
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
        id: "_.takeWhile4-code",
        language: "ts",
        children: `const baseArray = [
  { a: 3, b: 1 },
  { a: 0, b: 5 },
  { a: 3, b: 2 },
  { a: 3, b: 1 },
];

const takedWhile = _.takeWhile(baseArray, "a");
console.log(takedWhile); // [{ a: 3, b: 1 }];`,
      },
    },
  ],
};

export default takeWhile;
