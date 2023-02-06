import React from "react";
import { RuleProps } from "@src/components/Rule";

const difference: RuleProps = {
  id: "_.difference",
  blocks: [
    {
      type: "title",
      title: { id: "_.difference-title", children: "_.difference" },
    },
    {
      type: "description",
      description: {
        id: "_.difference-description",
        children: (
          <>
            Принимает <b>массивы</b>, возвращает <b>массив</b> из значений, которые <b>есть только в первом массиве</b>
            <div>
              Если <b>первым аргументом передано значение</b>, то вернётся пустой массив
            </div>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.difference-code",
        language: "ts",
        children: `const baseArray = [0, 1, "", [0], { a: 2 }];

const differenced = _.difference(baseArray, [0, "", [1], { a: 2 }], [[0]]);
console.log(differenced); // [1, [0], { a: 2 }];`,
      },
    },
  ],
};

export default difference;
