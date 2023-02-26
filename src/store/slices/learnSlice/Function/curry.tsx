import React from "react";
import Link from "@src/components/common/Link";
import { RuleProps } from "@src/components/Rule";

const curry: RuleProps = {
  id: "_.curry",
  blocks: [
    {
      type: "title",
      title: { id: "_.curry-title", children: "_.curry" },
    },
    {
      type: "description",
      description: {
        id: "_.curry-description",
        children: (
          <>
            Принимает <b>функцию и количество аргументов</b> (по умолчанию равно длине аргументов функции), возвращает{" "}
            <b>функцию</b>, которая при вызове ожидает аргументы. Если количество аргументов достаточно, возвращается
            результат, иначе функция, которая ожидает остальные аргументы
            <div>
              Если в функцию-результат <Link>_.curry</Link> нельзя сразу передать аргумент, то вместо него можно
              передать <b>_</b>, а сам аргумент передать позже
            </div>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.curry-code",
        language: "ts",
        children: `const transformation = (a: number, b: number, c: number, d: number) => {
  return [a, a + b, a + b + c, a + b + c + d];
}

const curred = _.curry(transformation, 3);

const result = curred(1)(2)(3);
console.log(result); // [1, 3, 6, null];

const result2 = curred(1)(2, 3);
console.log(result2); // [1, 3, 6, null];

const result3 = curred(1, 2, 3);
console.log(result3); // [1, 3, 6, null];

const result4 = curred(1)(_, 3)(2);
console.log(result4); // [1, 3, 6, null];`,
      },
    },
  ],
};

export default curry;
