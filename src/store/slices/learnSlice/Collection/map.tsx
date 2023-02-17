import React from "react";
import { RuleProps } from "@src/components/Rule";

const map: RuleProps = {
  id: "_.map",
  blocks: [
    {
      type: "title",
      title: { id: "_.map-title", children: "_.map" },
    },
    {
      type: "description",
      description: {
        id: "_.map-description",
        children: (
          <>
            Принимает <b>массив или объект и функцию преобразования</b>, возвращает <b>массив</b> значений после
            преобразования
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.map-code",
        language: "ts",
        children: `const baseArray = [{ a: 2, b: "lala" }, { a: 0, b: "nana" }];

const maped = _.map(baseArray, (value) => value.a);
console.log(maped); // [{ a: 2, b: "lala" }];`,
      },
    },
    {
      type: "description",
      description: {
        id: "_.map2-description",
        children: (
          <>
            Для того, чтобы взять свойсво, можно использовать ключ
            <div>
              <i>При преобразовании по объекту порядок не гарантируется</i>
            </div>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.map2-code",
        language: "ts",
        children: `const baseArray = { d: { a: 2, b: "lala" }, f: { a: 2, b: "nana" } };

const maped = _.map(baseArray, "a");
console.log(maped); // [2, 2];`,
      },
    },
  ],
};

export default map;
