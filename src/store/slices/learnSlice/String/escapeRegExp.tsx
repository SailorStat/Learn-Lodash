import React from "react";
import { RuleProps } from "@src/components/Rule";

const escapeRegExp: RuleProps = {
  id: "_.escapeRegExp",
  blocks: [
    {
      type: "title",
      title: { id: "_.escapeRegExp-title", children: "_.escapeRegExp" },
    },
    {
      type: "description",
      description: {
        id: "_.escapeRegExp-description",
        children: (
          <>
            Принимает <b>строку</b>. Bозвращает <b>строку</b>, в которой символы заменяются с целью корректного
            отображения html
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.escapeRegExp-code",
        language: "ts",
        children:
          `const escapedRegExp = _.escapeRegExp("[lodash](https://lodash.com/)");
` +
          // eslint-disable-next-line no-useless-escape
          `console.log(escapeRegExpd); // "\[lodash\]\(https://lodash\.com/\)";`,
      },
    },
  ],
};

export default escapeRegExp;
