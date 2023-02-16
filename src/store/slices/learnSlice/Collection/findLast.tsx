import React from "react";
import { RuleProps } from "@src/components/Rule";

const findLast: RuleProps = {
  id: "_.findLast",
  blocks: [
    {
      type: "title",
      title: { id: "_.findLast-title", children: "_.findLast" },
    },
    {
      type: "description",
      description: {
        id: "_.findLast-description",
        children: (
          <>
            Принимает <b>массив и функцию преобразования</b>, возвращает первый с конца <b>элемент массива</b>, который
            после преобразования вернул <b>==true</b>
            <div>
              <i>Если индекс не передан, поиск ведётся с последнего элемента</i>
            </div>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.findLast-code",
        language: "ts",
        children: `const baseArray = [
  { a: 0, b: "lala" },
  { a: 1, b: "nana" },
  { a: 2, b: "lala" },
  { a: 3, b: "lala" },
];

const findedLast = _.findLast(baseArray, (value) => value.b === "lala", 1);
console.log(findedLast); // [{ a: 0, b: "lala" }];`,
      },
    },
    {
      type: "description",
      description: {
        id: "_.findLast2-description",
        children: <>При поиске по объекту проверяются вложенные свойства на соответствие переданному объекту</>,
      },
    },
    {
      type: "code",
      code: {
        id: "_.findLast2-code",
        language: "ts",
        children: `const baseArray = [
  { a: 0, b: "lala" },
  { a: 1, b: "nana" },
  { a: 2, b: "nana" },
  { a: 3, b: "lala" },
];

const findedLast = _.findLast(baseArray, { b: "nana" });
console.log(findedLast); // [{ a: 2, b: "nana" }];`,
      },
    },
    {
      type: "description",
      description: {
        id: "_.findLast3-description",
        children: <>При поиске по массиву первое значение воспринимается, как ключ, второе - значение</>,
      },
    },
    {
      type: "code",
      code: {
        id: "_.findLast3-code",
        language: "ts",
        children: `const baseArray = [
  { a: 0, b: "lala" },
  { a: 1, b: "nana" },
  { a: 2, b: "nana" },
  { a: 3, b: "lala" },
];

const findedLast = _.findLast(baseArray, ["b", "nana"]);
console.log(findedLast); // [{ a: 1, b: "nana" }];`,
      },
    },
    {
      type: "description",
      description: {
        id: "_.findLast4-description",
        children: (
          <>
            При поиске по ключу возвращает элемент, который по ключу имеет значение <b>== true</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.findLast4-code",
        language: "ts",
        children: `const baseArray = [
  { a: 0, b: "lala" },
  { a: 1, b: "nana" },
  { a: 2, b: "nana" },
  { a: 3, b: "lala" },
];

const findedLast = _.findLast(baseArray, "a");
console.log(findedLast); // [{ a: 3, b: "lala" }];`,
      },
    },
  ],
};

export default findLast;
