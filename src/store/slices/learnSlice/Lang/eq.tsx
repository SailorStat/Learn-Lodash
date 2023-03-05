import React from "react";
import { RuleProps } from "@src/components/Rule";

const eq: RuleProps = {
  id: "_.eq",
  blocks: [
    {
      type: "title",
      title: { id: "_.eq-title", children: "_.eq" },
    },
    {
      type: "description",
      description: {
        id: "_.eq-description",
        children: (
          <>
            Принимает <b>два значения</b>, возвращает <b>true</b>, если значения строго равны. Иначе функция вернёт{" "}
            <b>false</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.eq-code",
        language: "ts",
        children: `const objectAndObject = _.eq({ a: 1 }, { a: 1 });
console.log(objectAndObject); // false;

const arrayAndArray = _.eq(["Lal", 1], ["Lal", 1]);
console.log(arrayAndArray); // false;

const stringAndString = _.eq("Lal", "Lal");
console.log(stringAndString); // true;`,
      },
    },
  ],
};

export default eq;
