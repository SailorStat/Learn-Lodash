import React from "react";
import { RuleProps } from "@src/components/Rule";

const lte: RuleProps = {
  id: "_.lte",
  blocks: [
    {
      type: "title",
      title: { id: "_.lte-title", children: "_.lte" },
    },
    {
      type: "description",
      description: {
        id: "_.lte-description",
        children: (
          <>
            Принимает <b>два значения</b>, возвращает <b>true</b>, если первое значение меньше или равно второму. Иначе
            функция вернёт <b>false</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.lte-code",
        language: "ts",
        children: `const threeAndOne = _.lte(1, 3);
console.log(threeAndOne); // true;

const threeAndThree = _.lte(3, 3);
console.log(threeAndThree); // true;`,
      },
    },
  ],
};

export default lte;
