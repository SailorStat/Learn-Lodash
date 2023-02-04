import React from "react";

import { RuleProps } from "../../components/Rule";

const differenceWith: RuleProps = {
  id: "_.differenceWith",
  blocks: [
    {
      type: "title",
      title: { id: "_.differenceWith-title", children: "_.differenceWith" },
    },
    {
      type: "description",
      description: {
        id: "_.differenceWith-description",
        children: (
          <>
            Принимает <b>массивы</b>, возвращает <b>массив</b> из значений, которые после выполнения функции вернули{" "}
            <b>false</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.differenceWith-code",
        language: "ts",
        children: `const baseArray = [1, 12, 14, 42];

const differencedWith = _.differenceWith(baseArray, [14], [1], (a, b) => a > b);
console.log(differencedWith); // [1];`,
      },
    },
  ],
};

export default differenceWith;
