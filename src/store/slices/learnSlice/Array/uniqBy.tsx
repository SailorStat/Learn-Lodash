import React from "react";
import { RuleProps } from "@src/components/Rule";

const uniqBy: RuleProps = {
  id: "_.uniqBy",
  blocks: [
    {
      type: "title",
      title: { id: "_.uniqBy-title", children: "_.uniqBy" },
    },
    {
      type: "description",
      description: {
        id: "_.uniqBy-description",
        children: (
          <>
            Принимает <b>массив и функцию</b>, возвращает <b>массив</b> уникальных значений после применения функции к
            каждому элементу
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.uniqBy-code",
        language: "ts",
        children: `const baseArray = [1.1, 1.2, 2.2, 2.3, 4.4, 4.5, 5.5, 5.6];

// Округление в близжайшую сторону
const unitedBy = _.uniqBy(baseArray, Math.round);
console.log(unitedBy); //[1.1, 2.2, 4.4, 4.5, 5.5];`,
      },
    },
    {
      type: "description",
      description: {
        id: "_.uniqBy2-description",
        children: (
          <>
            Принимает <b>массив и ключ</b>, возвращает <b>массив</b> уникальных значений при проверке элементов по ключу
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.uniqBy2-code",
        language: "ts",
        children: `const baseArray = [{ 0: 12, 1: 42 }, [12, 42]];

const unitedBy = _.uniqBy(baseArray, 0);
console.log(unitedBy); // [{ "0": 12, "1": 42 }];`,
      },
    },
  ],
};

export default uniqBy;
