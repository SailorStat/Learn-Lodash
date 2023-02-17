import React from "react";
import { RuleProps } from "@src/components/Rule";

const forEach: RuleProps = {
  id: "_.forEach",
  blocks: [
    {
      type: "title",
      title: { id: "_.forEach-title", children: "_.forEach" },
    },
    {
      type: "description",
      description: {
        id: "_.forEach-description",
        children: (
          <>
            Принимает <b>массив или объект и функцию для выполнения</b>, возвращает <b>переданный массив или объект</b>,
            выполняя функцию с каждым переданным значением
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.forEach-code",
        language: "ts",
        children: `const baseArray = [1, 5, 42, 4];

const transformation = (n: number) => {
  console.log(n);

  return { [n + "-t"]: n };
};

const forEached = _.forEach(baseArray, transformation);
// 1
// 5
// 42
// 4
console.log(forEached); // [1, 5, 42, 4];`,
      },
    },
    {
      type: "description",
      description: {
        id: "_.forEach-description",
        children: <>Для объектов порядок выполнения не гарантируется</>,
      },
    },
    {
      type: "code",
      code: {
        id: "_.forEach-code",
        language: "ts",
        children: `const baseObject = { d: 1, c: 5, b: 42, a: 4 };

const transformation = (n: number) => {
  console.log(n);

  return { [n + "-t"]: n };
};

const forEached = _.forEach(baseObject, transformation);
// 1
// 5
// 42
// 4
console.log(forEached); // [1, 5, 42, 4];`,
      },
    },
  ],
};

export default forEach;
