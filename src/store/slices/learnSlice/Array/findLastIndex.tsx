import React from "react";
import { RuleProps } from "@src/components/Rule";

const findLastIndex: RuleProps = {
  id: "_.findLastIndex",
  blocks: [
    {
      type: "title",
      title: { id: "_.findLastIndex-title", children: "_.findLastIndex" },
    },
    {
      type: "description",
      description: {
        id: "_.findLastIndex-description",
        children: (
          <>
            Принимает <b>массив и функцию поиска</b>, возвращает <b>последнее значение</b> (можно указать индекс начала{" "}
            поиска), результат которого <b>true</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.findLastIndex-code",
        language: "ts",
        children: `const baseArray = [1, 2, 3, 5, 8, 13];

const findedIndex = _.findLastIndex(baseArray, (value) => !(value % 2), 2);
console.log(findedIndex); // 1;`,
      },
    },
    {
      type: "description",
      description: {
        id: "_.findLastIndex2-description",
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
        id: "_.findLastIndex2-code",
        language: "ts",
        children: `const baseArray = [
  { a: { c: 3 }, b: 1 },
  { a: { c: 0 }, b: 5 },
  { a: { c: 0 }, b: 2 },
  { a: { c: 3 }, b: 1 },
];

const findedIndex = _.findLastIndex(baseArray, { a: { c: 0 } });
console.log(findedIndex); // 2;`,
      },
    },
    {
      type: "description",
      description: {
        id: "_.findLastIndex3-description",
        children: (
          <>
            Поиск по массиву принмает <b>первое значение, как ключ, второе, как значение</b>
            <div>
              <i>Отрицательные индексы ведут отсчёт с конца. -1 включает последний элемент</i>
            </div>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.findLastIndex3-code",
        language: "ts",
        children: `const baseArray = [
  { a: { c: 3 }, b: 1 },
  { a: { c: 0 }, b: 5 },
  { a: { c: 3 }, b: 2 },
  { a: { c: 3 }, b: 1 },
];

const findedIndex = _.findLastIndex(baseArray, ["a", { c: 3 }], -1);
console.log(findedIndex); // 3;`,
      },
    },
    {
      type: "description",
      description: {
        id: "_.findLastIndex4-description",
        children: (
          <>
            Поиск по строке вернёт последнее значение с полем <b> == true</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.findLastIndex4-code",
        language: "ts",
        children: `const baseArray = [
  { a: 3, b: 1 },
  { a: 0, b: 5 },
  { a: 3, b: 2 },
  { a: 0, b: 1 },
];

const findedIndex = _.findLastIndex(baseArray, "a");
console.log(findedIndex); // 2;`,
      },
    },
  ],
};

export default findLastIndex;
