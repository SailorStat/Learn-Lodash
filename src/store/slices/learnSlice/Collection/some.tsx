import React from "react";
import { RuleProps } from "@src/components/Rule";

const some: RuleProps = {
  id: "_.some",
  blocks: [
    {
      type: "title",
      title: { id: "_.some-title", children: "_.some" },
    },
    {
      type: "description",
      description: {
        id: "_.some-description",
        children: (
          <>
            Принимает <b>массив и функцию преобразования</b>, возвращает <b>true</b>, если есть элемент, который после
            преобразования вернул <b>== true</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.some-code",
        language: "ts",
        children: `const baseArray = [
  { a: 0, b: "lala" },
  { a: 1, b: "nana" },
  { a: 2, b: "lala" },
  { a: 3, b: "lala" },
];

const has = _.some(baseArray, (value) => value.b === "lala", 1);
console.log(has); // true;`,
      },
    },
    {
      type: "description",
      description: {
        id: "_.some2-description",
        children: <>При поиске по объекту проверяются вложенные свойства на соответствие переданному объекту</>,
      },
    },
    {
      type: "code",
      code: {
        id: "_.some2-code",
        language: "ts",
        children: `const baseArray = [
  { a: 0, b: "lala" },
  { a: 1, b: "nana" },
  { a: 2, b: "nana" },
  { a: 3, b: "lala" },
];

const has = _.some(baseArray, { b: "dodo" });
console.log(has); // false;`,
      },
    },
    {
      type: "description",
      description: {
        id: "_.some3-description",
        children: <>При поиске по массиву первое значение воспринимается, как ключ, второе - значение</>,
      },
    },
    {
      type: "code",
      code: {
        id: "_.some3-code",
        language: "ts",
        children: `const baseArray = [
  { a: 0, b: "lala" },
  { a: 1, b: "nana" },
  { a: 2, b: "nana" },
  { a: 3, b: "lala" },
];

const has = _.some(baseArray, ["b", "dodo"]);
console.log(has); // false;`,
      },
    },
    {
      type: "description",
      description: {
        id: "_.some4-description",
        children: (
          <>
            При поиске по ключу возвращает <b>true</b>, если есть элемент, который по ключу имеет значение{" "}
            <b>== true</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.some4-code",
        language: "ts",
        children: `const baseArray = [
  { a: 0, b: "lala" },
  { a: 1, b: "nana" },
  { a: 2, b: "nana" },
  { a: 3, b: "lala" },
];

const has = _.some(baseArray, "a");
console.log(has); // true;`,
      },
    },
  ],
};

export default some;
