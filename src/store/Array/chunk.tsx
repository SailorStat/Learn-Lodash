import React from "react";

import { RuleProps } from "../../components/Rule";

const chunk: RuleProps = {
  id: "_.chunk",
  blocks: [
    {
      type: "title",
      title: { id: "_.chunk-title", children: "_.chunk" },
    },
    {
      type: "description",
      description: {
        id: "_.chunk-description",
        children: (
          <>
            Делит <b>массив</b> на <b>массивы</b> указанного размера
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.chunk-code",
        language: "ts",
        children: `const baseArray = [0, 1, 2, 3, 4, 5, 6];
      
const chunks = _.chunk(baseArray, 2);
console.log(chunks); // [[0, 1], [2, 3], [4, 5], [6]]

const chunks2 = _.chunk(baseArray, 3);
console.log(chunks2); // [[0, 1, 2], [3, 4, 5], [6]];`,
      },
    },
  ],
};

export default chunk;
