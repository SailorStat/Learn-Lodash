import React from "react";
import { RuleProps } from "@src/components/Rule";

const gte: RuleProps = {
  id: "_.gte",
  blocks: [
    {
      type: "title",
      title: { id: "_.gte-title", children: "_.gte" },
    },
    {
      type: "description",
      description: {
        id: "_.gte-description",
        children: (
          <>
            Принимает <b>два значения</b>, возвращает <b>true</b>, если первое значение больше или равно второму. Иначе
            функция вернёт <b>false</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.gte-code",
        language: "ts",
        children: `const threeAndOne = _.gte(3, 1);
console.log(threeAndOne); // true;

const threeAndThree = _.gte(3, 3);
console.log(threeAndThree); // false;`,
      },
    },
  ],
};

export default gte;
