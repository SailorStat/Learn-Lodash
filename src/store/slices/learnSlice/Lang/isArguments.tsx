import React from "react";
import { RuleProps } from "@src/components/Rule";

const isArguments: RuleProps = {
  id: "_.isArguments",
  blocks: [
    {
      type: "title",
      title: { id: "_.isArguments-title", children: "_.isArguments" },
    },
    {
      type: "description",
      description: {
        id: "_.isArguments-description",
        children: (
          <>
            Принимает <b>значениe</b>, возвращает <b>true</b>, если возвращены аргументы. Иначе функция вернёт{" "}
            <b>false</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.isArguments-code",
        language: "ts",
        children: `const hasArguments = _.isArguments((() => 3)());
console.log(hasArguments); // false;

const hasArgs = _.isArguments(
  (function () {
    return arguments;
  })()
);
console.log(hasArgs); // true;`,
      },
    },
  ],
};

export default isArguments;
