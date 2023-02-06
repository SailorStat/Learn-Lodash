import React from "react";
import { RuleProps } from "@src/components/Rule";

const differenceBy: RuleProps = {
  id: "_.differenceBy",
  blocks: [
    {
      type: "title",
      title: { id: "_.differenceBy-title", children: "_.differenceBy" },
    },
    {
      type: "description",
      description: {
        id: "_.differenceBy-description",
        children: (
          <>
            Принимает <b>массивы</b>, возвращает <b>массив</b> из значений, которые <b>есть только в первом массиве</b>{" "}
            после применения функции (передаётся последним аргументом)
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.differenceBy-code",
        language: "ts",
        children: `const baseArray = [1, 12, 14, 16];

const differencedBy = _.differenceBy(baseArray, [24], [42], (value) => value % 12);
console.log(differencedBy); // [1, 14, 16];`,
      },
    },
    {
      type: "description",
      description: {
        id: "_.differenceBy-description2",
        children: (
          <>
            <b>Для объектов</b> можно вместо функции передать <b>свойство</b> для сравнения
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.differenceBy-code2",
        language: "ts",
        children: `interface BaseArrayItem {
  a: number;
}

const baseArray: BaseArrayItem[] = [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }];

const differencedBy = _.differenceBy(baseArray, [{ a: 1 }], [{ a: 2, b: 4 }], "a");
console.log(differencedBy); // [{ a: 3 }, { a: 4 }];`,
      },
    },
  ],
};

export default differenceBy;
