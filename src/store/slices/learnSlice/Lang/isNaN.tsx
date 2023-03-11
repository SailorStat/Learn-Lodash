import React from "react";
import { RuleProps } from "@src/components/Rule";

const isNaN: RuleProps = {
  id: "_.isNaN",
  blocks: [
    {
      type: "title",
      title: { id: "_.isNaN-title", children: "_.isNaN" },
    },
    {
      type: "description",
      description: {
        id: "_.isNaN-description",
        children: (
          <>
            Принимает <b>значение</b>, возвращает <b>true</b>, если значение NaN
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.isNaN-code",
        language: "ts",
        children: `const isNaNed = _.isNaN(NaN);
console.log(isNaNed); // true;

const isNaNed2 = _.isNaN(undefined);
console.log(isNaNed2); // false;

const isNaNed3 = _.isNaN(3);
console.log(isNaNed3); // false;`,
      },
    },
  ],
};

export default isNaN;
