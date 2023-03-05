import React from "react";
import { RuleProps } from "@src/components/Rule";

const isBoolean: RuleProps = {
  id: "_.isBoolean",
  blocks: [
    {
      type: "title",
      title: { id: "_.isBoolean-title", children: "_.isBoolean" },
    },
    {
      type: "description",
      description: {
        id: "_.isBoolean-description",
        children: (
          <>
            Принимает <b>значениe</b>, возвращает <b>true</b>, если значение булевое. Иначе функция вернёт <b>false</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.isBoolean-code",
        language: "ts",
        children: `const isBool = _.isBoolean(3);
console.log(isBool); // false;

const isBool2 = _.isBoolean(false);
console.log(isBool2); // true;

const isBool3 = _.isBoolean(true);
console.log(isBool3); // true;`,
      },
    },
  ],
};

export default isBoolean;
