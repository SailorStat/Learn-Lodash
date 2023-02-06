import React from "react";
import { RuleProps } from "@src/components/Rule";

const findIndex: RuleProps = {
  id: "_.findIndex",
  blocks: [
    {
      type: "title",
      title: { id: "_.findIndex-title", children: "_.findIndex" },
    },
    {
      type: "description",
      description: {
        id: "_.findIndex-description",
        children: (
          <>
            Принимает <b>массив и функцию поиска</b>, возвращает <b>первое значение</b> (можно указать индекс начала{" "}
            поиска), результат которого <b>true</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.findIndex-code",
        language: "ts",
        children: `const baseArray = [1, 2, 3, 5, 8, 13];

const findedIndex = _.findIndex(baseArray, (value) => !(value % 2), 2);
console.log(findedIndex); // 4;`,
      },
    },
    {
      type: "description",
      description: {
        id: "_.findIndex2-description",
        children: (
          <>
            Поиск по объекту проводит <b>глубокое сравнение по значению</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.findIndex2-code",
        language: "ts",
        children: `const baseArray = [
  { a: { c: 3 }, b: 1 },
  { a: { c: 0 }, b: 5 },
  { a: { c: 3 }, b: 2 },
  { a: { c: 3 }, b: 1 },
];

const findedIndex = _.findIndex(baseArray, { a: { c: 0 } });
console.log(findedIndex); // 1;`,
      },
    },
    {
      type: "description",
      description: {
        id: "_.findIndex3-description",
        children: (
          <>
            Поиск по массиву принмает <b>первое значение, как ключ, второе, как значение</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.findIndex3-code",
        language: "ts",
        children: `const baseArray = [
  { a: { c: 3 }, b: 1 },
  { a: { c: 0 }, b: 5 },
  { a: { c: 3 }, b: 2 },
  { a: { c: 3 }, b: 1 },
];

const findedIndex = _.findIndex(baseArray, ["a", { c: 3 }], 1);
console.log(findedIndex); // 2;`,
      },
    },
    {
      type: "description",
      description: {
        id: "_.findIndex4-description",
        children: (
          <>
            Поиск по строке вернёт первое значение с полем <b> == true</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.findIndex4-code",
        language: "ts",
        children: `const baseArray = [
  { a: 3, b: 1 },
  { a: 0, b: 5 },
  { a: 3, b: 2 },
  { a: 3, b: 1 },
];

const findedIndex = _.findIndex(baseArray, "a");
console.log(findedIndex); // 0;`,
      },
    },
  ],
};

export default findIndex;
