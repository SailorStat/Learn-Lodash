import React from "react";
import { RuleProps } from "@src/components/Rule";

const gt: RuleProps = {
  id: "_.gt",
  blocks: [
    {
      type: "title",
      title: { id: "_.gt-title", children: "_.gt" },
    },
    {
      type: "description",
      description: {
        id: "_.gt-description",
        children: (
          <>
            Принимает <b>два значения</b>, возвращает <b>true</b>, если первое значение больше второго. Иначе функция
            вернёт <b>false</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.gt-code",
        language: "ts",
        children: `const threeAndOne = _.gt(3, 1);
console.log(threeAndOne); // true;

const threeAndThree = _.gt(3, 3);
console.log(threeAndThree); // false;`,
      },
    },
  ],
};

export default gt;
