import React from "react";
import { RuleProps } from "@src/components/Rule";

const iteratee: RuleProps = {
  id: "_.iteratee",
  blocks: [
    {
      type: "title",
      title: { id: "_.iteratee-title", children: "_.iteratee" },
    },
    {
      type: "description",
      description: {
        id: "_.iteratee-description",
        children: (
          <>
            Принимает <b>итератор</b>, возвращает <b>функцию проверки</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.iteratee-code",
        language: "ts",
        children: `const baseArray = [
  { a: 3, b: 1 },
  { a: 0, b: 5 },
  { a: 3, b: 2 },
  { a: 3, b: 1 },
];

const iterated = _.map(baseArray,  _.iteratee((value) => value.b % 2));
console.log(iterated); // [1, 1, 0, 1];`,
      },
    },
    {
      type: "description",
      description: {
        id: "_.iteratee2-description",
        children: (
          <>
            Итератор по объекту возвращает <b>глубокое сравнение по значению</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.iteratee2-code",
        language: "ts",
        children: `const baseArray = [
  { a: { c: 3 }, b: 1 },
  { a: { c: 0 }, b: 5 },
  { a: { c: 3 }, b: 2 },
  { a: { c: 3 }, b: 1 },
];

const iterated = _.map(baseArray, _.iteratee({ a: { c: 3 } }));
console.log(iterated); // [true, false, true, true]`,
      },
    },
    {
      type: "description",
      description: {
        id: "_.iteratee3-description",
        children: (
          <>
            Итератор по массиву принмает <b>первое значение, как ключ, второе, как значение</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.iteratee3-code",
        language: "ts",
        children: `const baseArray = [
  { a: { c: 3 }, b: 1 },
  { a: { c: 0 }, b: 5 },
  { a: { c: 3 }, b: 2 },
  { a: { c: 3 }, b: 1 },
];

const iterated = _.map(baseArray, _.iteratee(["a", { c: 3 }]));
console.log(iterated); // [true, false, true, true];`,
      },
    },
    {
      type: "description",
      description: {
        id: "_.iteratee4-description",
        children: "Итератор по строке возвращает значение по ключу",
      },
    },
    {
      type: "code",
      code: {
        id: "_.iteratee4-code",
        language: "ts",
        children: `const baseArray = [
  { a: 3, b: 1 },
  { a: 0, b: 5 },
  { a: 3, b: 2 },
  { a: 3, b: 1 },
];

const iterated = _.map(baseArray, _.iteratee("a"));
console.log(iterated); // [3, 0, 3, 3]`,
      },
    },
  ],
};

export default iteratee;
