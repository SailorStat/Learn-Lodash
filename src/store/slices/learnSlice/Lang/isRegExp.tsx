import React from "react";
import { RuleProps } from "@src/components/Rule";

const isRegExp: RuleProps = {
  id: "_.isRegExp",
  blocks: [
    {
      type: "title",
      title: { id: "_.isRegExp-title", children: "_.isRegExp" },
    },
    {
      type: "description",
      description: {
        id: "_.isRegExp-description",
        children: (
          <>
            Принимает <b>значениe</b>, возвращает <b>true</b>, если значение - регулярное выражение
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.isRegExp-code",
        language: "ts",
        children: `const isRegExpable = _.isRegExp(/abc/);
console.log(isRegExpable); // true;

const isRegExpable2 = _.isRegExp("/abc/");
console.log(isRegExpable2); // false;`,
      },
    },
  ],
};

export default isRegExp;
