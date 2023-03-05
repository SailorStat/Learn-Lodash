import React from "react";
import { RuleProps } from "@src/components/Rule";

const isError: RuleProps = {
  id: "_.isError",
  blocks: [
    {
      type: "title",
      title: { id: "_.isError-title", children: "_.isError" },
    },
    {
      type: "description",
      description: {
        id: "_.isError-description",
        children: (
          <>
            Принимает <b>значениe</b>, возвращает <b>true</b>, если значение Buffer. Иначе функция вернёт <b>false</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.isError-code",
        language: "ts",
        children: `const isErr = _.isError(3);
console.log(isErr); // false;

const isErr2 = _.isError(new Error());
console.log(isErr2); // true;`,
      },
    },
  ],
};

export default isError;
