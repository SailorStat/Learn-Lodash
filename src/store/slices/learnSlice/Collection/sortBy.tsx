import React from "react";
import { RuleProps } from "@src/components/Rule";

const sortBy: RuleProps = {
  id: "_.sortBy",
  blocks: [
    {
      type: "title",
      title: { id: "_.sortBy-title", children: "_.sortBy" },
    },
    {
      type: "description",
      description: {
        id: "_.sortBy-description",
        children: (
          <>
            Принимает <b>массив и массив ключей</b>, возвращает <b>массив</b>, упорядоченный в приоритетности полей по
            порядку ключей во втором массивев порядке возрастания
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.sortBy-code",
        language: "ts",
        children: `const baseArray = [
  { name: "React", release: 2014 },
  { name: "Vue", release: 2014 },
  { name: "Angular", release: 2016 },
];

const sorted = _.sortBy(baseArray, ["release", "name"]);
console.log(sorted); // [
//   { name: "React", release: 2014 },
//   { name: "Vue", release: 2014 },
//   { name: "Angular", release: 2016 },
// ];`,
      },
    },
    {
      type: "description",
      description: {
        id: "_.sortBy2-description",
        children: <>При передаче функции, сортирует на основе результатов преобразования каждого значения</>,
      },
    },
    {
      type: "code",
      code: {
        id: "_.sortBy2-code",
        language: "ts",
        children: `const baseArray = [
  { name: "React", release: 2014 },
  { name: "Vue", release: 2014 },
  { name: "Angular", release: 2016 },
];

const sorted = _.sortBy(baseArray, (value) => value.name);
console.log(sorted); // [
//   { name: "Angular", release: 2016 },
//   { name: "React", release: 2014 },
//   { name: "Vue", release: 2014 },
// ];`,
      },
    },
    {
      type: "description",
      description: {
        id: "_.sortBy3-description",
        children: <>При передаче строки, сортирует на основе значений по ключу</>,
      },
    },
    {
      type: "code",
      code: {
        id: "_.sortBy3-code",
        language: "ts",
        children: `const baseArray = [
  { name: "React", release: 2014 },
  { name: "Vue", release: 2014 },
  { name: "Angular", release: 2016 },
];

const sorted = _.sortBy(baseArray, "name");
console.log(sorted); // [
//   { name: "Angular", release: 2016 },
//   { name: "React", release: 2014 },
//   { name: "Vue", release: 2014 },
// ];`,
      },
    },
  ],
};

export default sortBy;
