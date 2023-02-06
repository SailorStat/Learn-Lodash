import React from "react";
import { RuleProps } from "@src/components/Rule";

const dropWhile: RuleProps = {
  id: "_.dropWhile",
  blocks: [
    {
      type: "title",
      title: { id: "_.dropWhile-title", children: "_.dropWhile" },
    },
    {
      type: "description",
      description: {
        id: "_.dropWhile-description",
        children: (
          <>
            Принимает
            <b>массив и фильтр</b>, возвращает <b>массив без начальных значений</b>, сравнение которых вернёт{" "}
            <b>== true</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.dropWhile-code",
        language: "ts",
        children: `const baseArray = [1, 2, 3, 5, 8, 13];

const droppedWhile = _.dropWhile(baseArray, (value) => value % 2);
console.log(droppedWhile); // [2, 3, 5, 8, 13];`,
      },
    },
    {
      type: "description",
      description: {
        id: "_.dropWhile2-description",
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
        id: "_.dropWhile2-code",
        language: "ts",
        children: `const baseArray = [
  { a: { c: 3 }, b: 1 },
  { a: { c: 0 }, b: 5 },
  { a: { c: 3 }, b: 2 },
  { a: { c: 3 }, b: 1 },
];

const droppedWhile = _.dropWhile(baseArray, { a: { c: 3 } });
console.log(droppedWhile); // [{ a: { c: 0 }, b: 5 }, { a: { c: 3 }, b: 2 }, { a: { c: 3 }, b: 1 }];`,
      },
    },
    {
      type: "description",
      description: {
        id: "_.dropWhile3-description",
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
        id: "_.dropWhile3-code",
        language: "ts",
        children: `const baseArray = [
  { a: { c: 3 }, b: 1 },
  { a: { c: 0 }, b: 5 },
  { a: { c: 3 }, b: 2 },
  { a: { c: 3 }, b: 1 },
];

const droppedWhile = _.dropWhile(baseArray, ["a", { c: 3 }]);
console.log(droppedWhile); // [{ a: { c: 0 }, b: 5 }, { a: { c: 3 }, b: 2 }, { a: { c: 3 }, b: 1 }];`,
      },
    },
    {
      type: "description",
      description: {
        id: "_.dropWhile4-description",
        children: (
          <>
            Фильтр по строке убирает с начала, <b>до первого значения == false</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.dropWhile4-code",
        language: "ts",
        children: `const baseArray = [
  { a: 3, b: 1 },
  { a: 0, b: 5 },
  { a: 3, b: 2 },
  { a: 3, b: 1 },
];

const droppedWhile = _.dropWhile(baseArray, "a");
console.log(droppedWhile); // [{ a: 0, b: 5 }, { a: 3, b: 2 }, { a: 3, b: 1 }];`,
      },
    },
  ],
};

export default dropWhile;
