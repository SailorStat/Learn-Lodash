import React from "react";
import { RuleProps } from "@src/components/Rule";

const shuffle: RuleProps = {
  id: "_.shuffle",
  blocks: [
    {
      type: "title",
      title: { id: "_.shuffle-title", children: "_.shuffle" },
    },
    {
      type: "description",
      description: {
        id: "_.shuffle-description",
        children: (
          <>
            Принимает <b>массив</b>, возвращает <b>перемешанный массив</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.shuffle-code",
        language: "ts",
        children: `const baseArray = [1.3, 1.2, 4.5, 4.6];

const shuffled = _.shuffle(baseArray);
console.log(shuffled); // [4.6, 1.3, 4.5, 1.2];`,
      },
    },
  ],
};

export default shuffle;
