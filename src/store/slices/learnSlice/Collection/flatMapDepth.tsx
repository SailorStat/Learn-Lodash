import React from "react";
import { RuleProps } from "@src/components/Rule";

const flatMapDepth: RuleProps = {
  id: "_.flatMapDepth",
  blocks: [
    {
      type: "title",
      title: { id: "_.flatMapDepth-title", children: "_.flatMapDepth" },
    },
    {
      type: "description",
      description: {
        id: "_.flatMapDepth-description",
        children: (
          <>
            Принимает <b>массив, функцию преобразования, количество сглаженных слоёв массивов</b>, возвращает{" "}
            <b>сглаженный на указанное количество уровней массив</b>, содержащий все значения после преобразования
            <div>
              <i>Если количество слоёв не указано, сглаживается 1 уровень</i>
            </div>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.flatMapDepth-code",
        language: "ts",
        children: `const baseArray = [1, 5, 42, 4];

const transformation = (n: number) => [n, [[[{ a: 2 * n }]]]];

const flatedMapDeep = _.flatMapDepth(baseArray, transformation, 2);
console.log(flatedMapDeep); // [1, [{ a: 2 }], 5, [{ a: 10 }], 42, [{ a: 84 }], 4, [{ a: 8 }]];`,
      },
    },
  ],
};

export default flatMapDepth;
