import React from "react";
import { RuleProps } from "@src/components/Rule";

const filter: RuleProps = {
  id: "_.filter",
  blocks: [
    {
      type: "title",
      title: { id: "_.filter-title", children: "_.filter" },
    },
    {
      type: "description",
      description: {
        id: "_.filter-description",
        children: (
          <>
            Принимает <b>массив и функцию преобразования</b>, возвращает <b>массив</b> значений, которые после
            преобразования вернули <b>==true</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.filter-code",
        language: "ts",
        children: `const baseArray = [{ a: 2, b: "lala" }, { a: 0, b: "nana" }];

const filtered = _.filter(baseArray, (value) => value.a);
console.log(filtered); // [{ a: 2, b: "lala" }];`,
      },
    },
    {
      type: "description",
      description: {
        id: "_.filter2-description",
        children: <>При фильтрации по объекту проверяются вложенные свойства на соответствие переданному объекту</>,
      },
    },
    {
      type: "code",
      code: {
        id: "_.filter2-code",
        language: "ts",
        children: `const baseArray = [{ a: 2, b: "lala" }, { a: 0, b: "nana" }];
        
const filtered = _.filter(baseArray, { b: "nana" });
console.log(filtered); // [{ a: 0, b: "nana" }];`,
      },
    },
    {
      type: "description",
      description: {
        id: "_.filter3-description",
        children: <>При фильтрации по массиву первое значение воспринимается, как ключ, второе - значение</>,
      },
    },
    {
      type: "code",
      code: {
        id: "_.filter3-code",
        language: "ts",
        children: `const baseArray = [{ a: 2, b: "lala" }, { a: 2, b: "nana" }];

const filtered = _.filter(baseArray, ["a", 2]);
console.log(filtered); // [{ a: 2, b: "lala" }, { a: 2, b: "nana" }];`,
      },
    },
    {
      type: "description",
      description: {
        id: "_.filter4-description",
        children: (
          <>
            При фильтрации по ключу возвращает элементы, которые по ключу имеют значение <b>== true</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.filter4-code",
        language: "ts",
        children: `const baseArray = [{ a: 2, b: "lala" }, { a: 0, b: "nana" }];

const filtered = _.filter(baseArray, "a");
console.log(filtered); // [{ a: 2, b: "lala" }];`,
      },
    },
  ],
};

export default filter;
