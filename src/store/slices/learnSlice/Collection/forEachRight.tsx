import React from "react";
import { RuleProps } from "@src/components/Rule";

const forEachRight: RuleProps = {
  id: "_.forEachRight",
  blocks: [
    {
      type: "title",
      title: { id: "_.forEachRight-title", children: "_.forEachRight" },
    },
    {
      type: "description",
      description: {
        id: "_.forEachRight-description",
        children: (
          <>
            Принимает <b>массив или объект и функцию для выполнения</b>, возвращает <b>переданный массив или объект</b>,
            выполняя функцию с каждым переданным значением, начиная с конца
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.forEachRight-code",
        language: "ts",
        children: `const baseArray = [1, 5, 42, 4];

const transformation = (n: number) => {
  console.log(n);

  return { [n + "-t"]: n };
};

const forEachRighted = _.forEachRight(baseArray, transformation);
// 4
// 42
// 5
// 1
console.log(forEachRighted); // [1, 5, 42, 4];`,
      },
    },
    {
      type: "description",
      description: {
        id: "_.forEachRight-description",
        children: <>Для объектов порядок выполнения не гарантируется</>,
      },
    },
    {
      type: "code",
      code: {
        id: "_.forEachRight-code",
        language: "ts",
        children: `const baseObject = { d: 1, c: 5, b: 42, a: 4 };

const transformation = (n: number) => {
  console.log(n);

  return { [n + "-t"]: n };
};

const forEachRighted = _.forEachRight(baseObject, transformation);
// 4
// 42
// 5
// 1
console.log(forEachRighted); // [1, 5, 42, 4];`,
      },
    },
  ],
};

export default forEachRight;
