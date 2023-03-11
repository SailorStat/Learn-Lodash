import React from "react";
import { RuleProps } from "@src/components/Rule";

const isObjectLike: RuleProps = {
  id: "_.isObjectLike",
  blocks: [
    {
      type: "title",
      title: { id: "_.isObjectLike-title", children: "_.isObjectLike" },
    },
    {
      type: "description",
      description: {
        id: "_.isObjectLike-description",
        children: (
          <>
            Принимает <b>значениe</b>, возвращает <b>true</b> для значений c типом Object
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.isObjectLike-code",
        language: "ts",
        children: `const isObjLike = _.isObjectLike([]);
console.log(isObjLike); // true;

const isObjLike2 = _.isObjectLike(() => console);
console.log(isObjLike2); // false;`,
      },
    },
  ],
};

export default isObjectLike;
