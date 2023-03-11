import React from "react";
import { RuleProps } from "@src/components/Rule";

const lt: RuleProps = {
  id: "_.lt",
  blocks: [
    {
      type: "title",
      title: { id: "_.lt-title", children: "_.lt" },
    },
    {
      type: "description",
      description: {
        id: "_.lt-description",
        children: (
          <>
            Принимает <b>два значения</b>, возвращает <b>true</b>, если первое значение меньше второго
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.lt-code",
        language: "ts",
        children: `const threeAndOne = _.lt(1, 3);
console.log(threeAndOne); // true;

const threeAndThree = _.lt(3, 3);
console.log(threeAndThree); // false;`,
      },
    },
  ],
};

export default lt;
