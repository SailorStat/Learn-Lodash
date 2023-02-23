import React from "react";
import { RuleProps } from "@src/components/Rule";

const sample: RuleProps = {
  id: "_.sample",
  blocks: [
    {
      type: "title",
      title: { id: "_.sample-title", children: "_.sample" },
    },
    {
      type: "description",
      description: {
        id: "_.sample-description",
        children: (
          <>
            Принимает <b>массив</b>, возвращает <b>случайный элемент</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.sample-code",
        language: "ts",
        children: `const baseArray = [1.3, 1.2, 4.5, 4.6];

const sampled = _.sample(baseArray);
console.log(sampled); // 4.5;

const sampled2 = _.sample(baseArray);
console.log(sampled2); // 1.2;`,
      },
    },
  ],
};

export default sample;
