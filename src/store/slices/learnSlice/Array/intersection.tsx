import React from "react";
import { RuleProps } from "@src/components/Rule";

const intersection: RuleProps = {
  id: "_.intersection",
  blocks: [
    {
      type: "title",
      title: { id: "_.intersection-title", children: "_.intersection" },
    },
    {
      type: "description",
      description: {
        id: "_.intersection-description",
        children: (
          <>
            Принимает <b>массивы</b>, возвращает <b>массив значений</b>, существующих во всех массивов
            <div>Порядок определяется перавым массивом</div>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.intersection-code",
        language: "ts",
        children: `const baseArray = [1, 2, 3, 5, 8, 13];

const intersected = _.intersection(baseArray, [2, 4, 6, 8, 10], [1, 2, 4, 8, 16]);
console.log(intersected); // [2, 8];`,
      },
    },
  ],
};

export default intersection;
