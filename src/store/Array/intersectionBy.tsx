import React from "react";
import { RuleProps } from "@src/components/Rule";

const intersectionBy: RuleProps = {
  id: "_.intersectionBy",
  blocks: [
    {
      type: "title",
      title: { id: "_.intersectionBy-title", children: "_.intersectionBy" },
    },
    {
      type: "description",
      description: {
        id: "_.intersectionBy-description",
        children: (
          <>
            Принимает <b>массивы и функцию</b>, возвращает <b>массив</b> значений, которые есть во всех массивах после
            применения функции к каждому элементу
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.intersectionBy-code",
        language: "ts",
        children: `const baseArray = [1.1, 2.2, 3.3, 4.4, 5.5, 6.6, 7.7, 8.8];
const baseArray2 = [1, 2, 3, 5, 8];

// Округление в близжайшую сторону
const intersectedBy = _.intersectionBy(baseArray, baseArray2, Math.round);
console.log(intersectedBy); // [1.1, 2.2, 3.3, 7.7];`,
      },
    },
    {
      type: "description",
      description: {
        id: "_.intersectionBy2-description",
        children: (
          <>
            Принимает <b>массивы и ключ</b>, возвращает <b>массив</b> значений, которые содержатся в каждом массиве при
            проверке элементов по ключу
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.intersectionBy2-code",
        language: "ts",
        children: `const baseArray = [{ 0: 12, 1: 42 }, [12, 42]];

const intersectedBy = _.intersectionBy(baseArray, [[12, 42]], 0);
console.log(intersectedBy); //{ 0: 12, 1: 42 };`,
      },
    },
  ],
};

export default intersectionBy;
