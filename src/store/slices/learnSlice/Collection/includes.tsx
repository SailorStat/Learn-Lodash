import React from "react";
import { RuleProps } from "@src/components/Rule";

const includes: RuleProps = {
  id: "_.includes",
  blocks: [
    {
      type: "title",
      title: { id: "_.includes-title", children: "_.includes" },
    },
    {
      type: "description",
      description: {
        id: "_.includes-description",
        children: (
          <>
            Принимает <b>массив и искомое значение</b>, возвращает <b>true</b>, если внутри есть искомое значение
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.includes-code",
        language: "ts",
        children: `const baseArray = ["lala", "nana"];

const included = _.includes(baseArray, "lala");
console.log(included); // true;`,
      },
    },
    {
      type: "description",
      description: {
        id: "_.includes2-description",
        children: <>Поиск работает и в объекте</>,
      },
    },
    {
      type: "code",
      code: {
        id: "_.includes2-code",
        language: "ts",
        children: `const baseArray = { a: "lala", b: "nana" };

const included = _.includes(baseArray, "lala");
console.log(included); // true;`,
      },
    },
    {
      type: "description",
      description: {
        id: "_.includes3-description",
        children: <>И в строке</>,
      },
    },
    {
      type: "code",
      code: {
        id: "_.includes3-code",
        language: "ts",
        children: `const included = _.includes("lala", "la");
console.log(included); // true;`,
      },
    },
  ],
};

export default includes;
