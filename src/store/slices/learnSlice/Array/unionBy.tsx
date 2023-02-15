import React from "react";
import { RuleProps } from "@src/components/Rule";

const unionBy: RuleProps = {
  id: "_.unionBy",
  blocks: [
    {
      type: "title",
      title: { id: "_.unionBy-title", children: "_.unionBy" },
    },
    {
      type: "description",
      description: {
        id: "_.unionBy-description",
        children: (
          <>
            Принимает <b>массивы и функцию</b>, возвращает <b>массив</b> уникальных значений, которые есть в массивах
            после применения функции к каждому элементу
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.unionBy-code",
        language: "ts",
        children: `const baseArray = [1.1, 2.2, 3.3, 4.4, 5.5, 6.6, 7.7, 8.8];
const baseArray2 = [1, 2, 3, 5, 8];

// Округление в близжайшую сторону
const unitedBy = _.unionBy(baseArray, baseArray2, Math.round);
console.log(unitedBy); // [1.1, 2.2, 3.3, 4.4, 5.5, 6.6, 7.7, 8.8, 5];`,
      },
    },
    {
      type: "description",
      description: {
        id: "_.unionBy2-description",
        children: (
          <>
            Принимает <b>массивы и ключ</b>, возвращает <b>массив</b> уникальных значений, которые содержатся массивах
            при проверке элементов по ключу
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.unionBy2-code",
        language: "ts",
        children: `const baseArray = [{ 0: 12, 1: 42 }, [12, 42]];

const unitedBy = _.unionBy(baseArray, [[12, 42]], 0);
console.log(unitedBy); // [{ "0": 12, "1": 42 }];`,
      },
    },
  ],
};

export default unionBy;
