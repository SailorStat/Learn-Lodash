import React from "react";
import { RuleProps } from "@src/components/Rule";

const isEqual: RuleProps = {
  id: "_.isEqual",
  blocks: [
    {
      type: "title",
      title: { id: "_.isEqual-title", children: "_.isEqual" },
    },
    {
      type: "description",
      description: {
        id: "_.isEqual-description",
        children: (
          <>
            Принимает <b>два значения</b>, возвращает <b>true</b>, если значения рекурсивно равны. Иначе функция вернёт{" "}
            <b>false</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.isEqual-code",
        language: "ts",
        children: `const objectAndObject = _.isEqual({ a: 1 }, { a: 1 });
console.log(objectAndObject); // true;

const arrayAndArray = _.isEqual(["Lal", 1], ["Lal", 1]);
console.log(arrayAndArray); // true;

const stringAndString = _.isEqual("Lal", "Lal");
console.log(stringAndString); // true;`,
      },
    },
  ],
};

export default isEqual;
