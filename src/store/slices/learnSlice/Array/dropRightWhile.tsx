import React from "react";
import { RuleProps } from "@src/components/Rule";

const dropRightWhile: RuleProps = {
  id: "_.dropRightWhile",
  blocks: [
    {
      type: "title",
      title: { id: "_.dropRightWhile-title", children: "_.dropRightWhile" },
    },
    {
      type: "description",
      description: {
        id: "_.dropRightWhile-description",
        children: (
          <>
            Принимает
            <b>массив и фильтр</b>, возвращает <b>массив без последних значений</b>, сравнение которых вернёт{" "}
            <b>== true</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.dropRightWhile-code",
        language: "ts",
        children: `const baseArray = [1, 2, 3, 5, 8, 13];

const droppedRightWhile = _.dropRightWhile(baseArray, (value) => value % 2);
console.log(droppedRightWhile); // [1, 2, 3, 5, 8];`,
      },
    },
    {
      type: "description",
      description: {
        id: "_.dropRightWhile2-description",
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
        id: "_.dropRightWhile2-code",
        language: "ts",
        children: `const baseArray = [
  { a: { c: 3 }, b: 1 },
  { a: { c: 0 }, b: 5 },
  { a: { c: 3 }, b: 2 },
  { a: { c: 3 }, b: 1 },
];

const droppedRightWhile = _.dropRightWhile(baseArray, { a: { c: 3 } });
console.log(droppedRightWhile); // [{ a: { c: 3 }, b: 1 }, { a: { c: 0 }, b: 5 }];`,
      },
    },
    {
      type: "description",
      description: {
        id: "_.dropRightWhile3-description",
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
        id: "_.dropRightWhile3-code",
        language: "ts",
        children: `const baseArray = [
  { a: { c: 3 }, b: 1 },
  { a: { c: 0 }, b: 5 },
  { a: { c: 3 }, b: 2 },
  { a: { c: 3 }, b: 1 },
];

const droppedRightWhile = _.dropRightWhile(baseArray, ["a", { c: 3 }]);
console.log(droppedRightWhile); // [{ a: { c: 3 }, b: 1 }, { a: { c: 0 }, b: 5 }];`,
      },
    },
    {
      type: "description",
      description: {
        id: "_.dropRightWhile4-description",
        children: (
          <>
            Фильтр по строке убирает с конца, <b>до первого значения == false</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.dropRightWhile4-code",
        language: "ts",
        children: `const baseArray = [
  { a: 3, b: 1 },
  { a: 0, b: 5 },
  { a: 3, b: 2 },
  { a: 3, b: 1 },
];

const droppedRightWhile = _.dropRightWhile(baseArray, "a");
console.log(droppedRightWhile); // [{ a: 3, b: 1 }, { a: 0, b: 5 }];`,
      },
    },
  ],
};

export default dropRightWhile;
