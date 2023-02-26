import React from "react";
import Link from "@src/components/common/Link";
import { RuleProps } from "@src/components/Rule";

const curryRight: RuleProps = {
  id: "_.curryRight",
  blocks: [
    {
      type: "title",
      title: { id: "_.curryRight-title", children: "_.curryRight" },
    },
    {
      type: "description",
      description: {
        id: "_.curryRight-description",
        children: (
          <>
            Принимает <b>функцию и количество аргументов</b> (по умолчанию равно длине аргументов функции), возвращает{" "}
            <b>функцию</b>, которая при вызове ожидает аргументы. Если количество аргументов достаточно, возвращается
            результат, иначе функция, которая ожидает остальные аргументы. Функция получает аргументы, начиная с
            последнего вызова
            <div>
              Если в функцию-результат <Link>_.curryRight</Link> нельзя сразу передать аргумент, то вместо него можно
              передать <b>_</b>, а сам аргумент передать позже
            </div>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.curryRight-code",
        language: "ts",
        children: `const transformation = (a: number, b: number, c: number, d: number) => {
  return [a, a + b, a + b + c, a + b + c + d];
};

const curriedRight = _.curryRight(transformation, 3);

const result = curriedRight(3)(2)(1);
console.log(result); // [1, 3, 6, null];

const result2 = curriedRight(3)(1, 2);
console.log(result2); // [1, 3, 6, null];

const result3 = curriedRight(1, 2, 3);
console.log(result3); // [1, 3, 6, null];

const result4 = curriedRight(3)(_, 2)(1);
console.log(result4); // [1, 3, 6, null];`,
      },
    },
  ],
};

export default curryRight;
