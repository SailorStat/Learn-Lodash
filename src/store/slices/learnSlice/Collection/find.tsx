import React from "react";
import { RuleProps } from "@src/components/Rule";

const find: RuleProps = {
  id: "_.find",
  blocks: [
    {
      type: "title",
      title: { id: "_.find-title", children: "_.find" },
    },
    {
      type: "description",
      description: {
        id: "_.find-description",
        children: (
          <>
            Принимает <b>массив и функцию преобразования</b>, возвращает первый <b>элемент массива</b>, который после
            преобразования вернул <b>==true</b>
            <div>
              <i>Если индекс не передан, поиск ведётся с нулевого элемента</i>
            </div>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.find-code",
        language: "ts",
        children: `const baseArray = [
  { a: 0, b: "lala" },
  { a: 1, b: "nana" },
  { a: 2, b: "lala" },
  { a: 3, b: "lala" },
];

const finded = _.find(baseArray, (value) => value.b === "lala", 1);
console.log(finded); // [{ a: 2, b: "lala" }];`,
      },
    },
    {
      type: "description",
      description: {
        id: "_.find2-description",
        children: <>При поиске по объекту проверяются вложенные свойства на соответствие переданному объекту</>,
      },
    },
    {
      type: "code",
      code: {
        id: "_.find2-code",
        language: "ts",
        children: `const baseArray = [
  { a: 0, b: "lala" },
  { a: 1, b: "nana" },
  { a: 2, b: "nana" },
  { a: 3, b: "lala" },
];

const finded = _.find(baseArray, { b: "nana" });
console.log(finded); // [{ a: 1, b: "nana" }];`,
      },
    },
    {
      type: "description",
      description: {
        id: "_.find3-description",
        children: <>При поиске по массиву первое значение воспринимается, как ключ, второе - значение</>,
      },
    },
    {
      type: "code",
      code: {
        id: "_.find3-code",
        language: "ts",
        children: `const baseArray = [
  { a: 0, b: "lala" },
  { a: 1, b: "nana" },
  { a: 2, b: "nana" },
  { a: 3, b: "lala" },
];

const finded = _.find(baseArray, ["b", "nana"]);
console.log(finded); // [{ a: 1, b: "nana" }];`,
      },
    },
    {
      type: "description",
      description: {
        id: "_.find4-description",
        children: (
          <>
            При поиске по ключу возвращает элемент, которыq по ключу имеет значение <b>== true</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.find4-code",
        language: "ts",
        children: `const baseArray = [
  { a: 0, b: "lala" },
  { a: 1, b: "nana" },
  { a: 2, b: "nana" },
  { a: 3, b: "lala" },
];

const finded = _.find(baseArray, "a");
console.log(finded); // [{ a: 1, b: "nana" }];`,
      },
    },
  ],
};

export default find;
