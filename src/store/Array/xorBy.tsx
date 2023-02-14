import React from "react";
import { RuleProps } from "@src/components/Rule";

const xorBy: RuleProps = {
  id: "_.xorBy",
  blocks: [
    {
      type: "title",
      title: { id: "_.xorBy-title", children: "_.xorBy" },
    },
    {
      type: "description",
      description: {
        id: "_.xorBy-description",
        children: (
          <>
            Принимает <b>массивы и функцию</b>, возвращает <b>массив</b> уникальных значений, которые есть только в
            одном массиве после применения функции к каждому элементу
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.xorBy-code",
        language: "ts",
        children: `const baseArray = [1.1, 2.2, 3.3, 4.4, 5.5, 6.6, 7.7, 8.8];
const baseArray2 = [1, 2, 3, 5, 8];

// Округление в близжайшую сторону
const xoredBy = _.xorBy(baseArray, baseArray2, Math.round);
console.log(xoredBy); // [4.4, 5.5, 6.6, 8.8, 5];`,
      },
    },
    {
      type: "description",
      description: {
        id: "_.unionBy2-description",
        children: (
          <>
            Принимает <b>массивы и ключ</b>, возвращает <b>массив</b> уникальных значений, которые содержатся только в
            одном массиве при проверке элементов по ключу
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

const xoredBy = _.xorBy(baseArray, [[12, 42]], 0);
console.log(xoredBy); // [];`,
      },
    },
  ],
};

export default xorBy;
