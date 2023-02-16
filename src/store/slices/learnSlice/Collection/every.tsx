import React from "react";
import { RuleProps } from "@src/components/Rule";

const every: RuleProps = {
  id: "_.every",
  blocks: [
    {
      type: "title",
      title: { id: "_.every-title", children: "_.every" },
    },
    {
      type: "description",
      description: {
        id: "_.every-description",
        children: (
          <>
            Принимает <b>массив и функцию преобразования</b>, проверяет, все ли значения после преобразования возвращают
            true, если так, то вернёт <b>true</b>, иначе <b>false</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.every-code",
        language: "ts",
        children: `const isEvery = _.every([true, "0", 1, []], Boolean);
console.log(isEvery); // true;`,
      },
    },
    {
      type: "description",
      description: {
        id: "_.every2-description",
        children: <>При проверке по объекту проверяет вложенные свойства</>,
      },
    },
    {
      type: "code",
      code: {
        id: "_.every2-code",
        language: "ts",
        children: `const baseArray = [{ a: 2, b: "lala" }, { a: 2, b: "nana" }];

const isEvery = _.every(baseArray, { a: 2, b: "lala" });
console.log(isEvery); // false;`,
      },
    },
    {
      type: "description",
      description: {
        id: "_.every3-description",
        children: <>При проверке по массиву первое значение воспринимается, как ключ, второе - значение</>,
      },
    },
    {
      type: "code",
      code: {
        id: "_.every3-code",
        language: "ts",
        children: `const baseArray = [{ a: 2, b: "lala" }, { a: 2, b: "nana" }];

const isEvery = _.every(baseArray, ["a", 2]);
console.log(isEvery); // true;`,
      },
    },
    {
      type: "description",
      description: {
        id: "_.every4-description",
        children: (
          <>
            При проверке по ключу сверяет, что все элементы по ключу возвращают <b>== true</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.every4-code",
        language: "ts",
        children: `const baseArray = [{ a: 2, b: "lala" }, { a: 2, b: "nana" }];

const isEvery = _.every(baseArray, "a");
console.log(isEvery); // true;`,
      },
    },
  ],
};

export default every;
