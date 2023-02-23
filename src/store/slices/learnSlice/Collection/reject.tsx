import React from "react";
import Link from "@src/components/common/Link";
import { RuleProps } from "@src/components/Rule";

const reject: RuleProps = {
  id: "_.reject",
  blocks: [
    {
      type: "title",
      title: { id: "_.reject-title", children: "_.reject" },
    },
    {
      type: "description",
      description: {
        id: "_.reject-description",
        children: (
          <>
            Принимает <b>массив и функцию преобразования</b>, возвращает <b>массив</b> значений, которые после
            преобразования вернули <b>== false</b>
            <div>
              Противоположно <Link href="_.filter">_.filter</Link>
            </div>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.reject-code",
        language: "ts",
        children: `const baseArray = [{ a: 2, b: "lala" }, { a: 0, b: "nana" }];

const rejected = _.reject(baseArray, (value) => value.a);
console.log(rejected); // [{ a: 0, b: "nana" }];`,
      },
    },
    {
      type: "description",
      description: {
        id: "_.reject2-description",
        children: <>При фильтрации по объекту проверяются вложенные свойства на соответствие переданному объекту</>,
      },
    },
    {
      type: "code",
      code: {
        id: "_.reject2-code",
        language: "ts",
        children: `const baseArray = [{ a: 2, b: "lala" }, { a: 0, b: "nana" }];
        
const rejected = _.reject(baseArray, { b: "nana" });
console.log(rejected); // [{ a: 2, b: "lala" }];`,
      },
    },
    {
      type: "description",
      description: {
        id: "_.reject3-description",
        children: <>При фильтрации по массиву первое значение воспринимается, как ключ, второе - значение</>,
      },
    },
    {
      type: "code",
      code: {
        id: "_.reject3-code",
        language: "ts",
        children: `const baseArray = [{ a: 2, b: "lala" }, { a: 1, b: "nana" }];

const rejected = _.reject(baseArray, ["a", 2]);
console.log(rejected); // [{ a: 1, b: "nana" }];`,
      },
    },
    {
      type: "description",
      description: {
        id: "_.reject4-description",
        children: (
          <>
            При фильтрации по ключу возвращает элементы, которые по ключу имеют значение <b>== false</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.reject4-code",
        language: "ts",
        children: `const baseArray = [{ a: 2, b: "lala" }, { a: 0, b: "nana" }];

const rejected = _.reject(baseArray, "a");
console.log(rejected); // [{ a: 0, b: "nana" }];`,
      },
    },
  ],
};

export default reject;
