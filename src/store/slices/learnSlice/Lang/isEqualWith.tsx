import React from "react";
import { RuleProps } from "@src/components/Rule";

const isEqualWith: RuleProps = {
  id: "_.isEqualWith",
  blocks: [
    {
      type: "title",
      title: { id: "_.isEqualWith-title", children: "_.isEqualWith" },
    },
    {
      type: "description",
      description: {
        id: "_.isEqualWith-description",
        children: (
          <>
            Принимает <b>два значения</b>, возвращает <b>true</b>, если значения равны после применения функции
            сравнения
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.isEqualWith-code",
        language: "ts",
        children: `const equaled = function <T>(value: T[], value2: T[]) {
  return value[1] === value2[1];
};

const objectAndObject = _.isEqualWith({ a: 1 }, { a: 1 }, equaled);
console.log(objectAndObject); // true;

const arrayAndArray = _.isEqualWith(["Lal", 1], ["Lal", 1], equaled);
console.log(arrayAndArray); // true;

const stringAndString = _.isEqualWith("Nana", "Lala", equaled);
console.log(stringAndString); // true;`,
      },
    },
  ],
};

export default isEqualWith;
