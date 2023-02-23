import React from "react";
import { RuleProps } from "@src/components/Rule";

const partition: RuleProps = {
  id: "_.partition",
  blocks: [
    {
      type: "title",
      title: { id: "_.partition-title", children: "_.partition" },
    },
    {
      type: "description",
      description: {
        id: "_.partition-description",
        children: (
          <>
            Принимает <b>массив и функцию преобразования</b>, возвращает <b>два массива</b>, в первом все значения, для
            которых преобразование вернуло <b>== true</b>, во втором остальные
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.partition-code",
        language: "ts",
        children: `const baseArray = [
  { a: 0, b: "lala" },
  { a: 1, b: "nana" },
  { a: 2, b: "la" },
  { a: 3, b: "lala" },
];

const partitioned = _.partition(baseArray, (value) => value.b === "lala");
console.log(partitioned); // [
//   [{ a: 0, b: "lala" }, { a: 3, b: "lala" }],
//   [{ a: 1, b: "nana" }, { a: 2, b: "la" }],
// ];`,
      },
    },
    {
      type: "description",
      description: {
        id: "_.partition2-description",
        children: <>При преобразовании по объекту проверяются вложенные свойства на соответствие переданному объекту</>,
      },
    },
    {
      type: "code",
      code: {
        id: "_.partition2-code",
        language: "ts",
        children: `const baseArray = [
  { a: 0, b: "lala" },
  { a: 1, b: "nana" },
  { a: 2, b: "la" },
  { a: 3, b: "lala" },
];

const partitioned = _.partition(baseArray, { b: "lala" });
console.log(partitioned); // [
//   [{ a: 0, b: "lala" }, { a: 3, b: "lala" }],
//   [{ a: 1, b: "nana" }, { a: 2, b: "la" }],
// ];`,
      },
    },
    {
      type: "description",
      description: {
        id: "_.partition3-description",
        children: <>При преобразовании по массиву первое значение воспринимается, как ключ, второе - значение</>,
      },
    },
    {
      type: "code",
      code: {
        id: "_.partition3-code",
        language: "ts",
        children: `const baseArray = [
  { a: 0, b: "lala" },
  { a: 1, b: "nana" },
  { a: 2, b: "la" },
  { a: 3, b: "lala" },
];

const partitioned = _.partition(baseArray, ["b", "lala"]);
console.log(partitioned); // [
//   [{ a: 0, b: "lala" }, { a: 3, b: "lala" }],
//   [{ a: 1, b: "nana" }, { a: 2, b: "la" }],
// ];`,
      },
    },
    {
      type: "description",
      description: {
        id: "_.partition4-description",
        children: (
          <>
            При преобразованию по ключу в первом массиве возвращает элементы, которые по ключу имеют значение{" "}
            <b>== true</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.partition4-code",
        language: "ts",
        children: `const baseArray = [
  { a: 0, b: "lala" },
  { a: 1, b: "nana" },
  { a: 2, b: "la" },
  { a: 3, b: "lala" },
];

const partitioned = _.partition(baseArray, "а");
console.log(partitioned); // [
//   [{ a: 3, b: "lala" }, { a: 1, b: "nana" }, { a: 2, b: "la" }],
//   [{ a: 0, b: "lala" }],
// ];`,
      },
    },
  ],
};

export default partition;
