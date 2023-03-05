import React from "react";
import { RuleProps } from "@src/components/Rule";

const isBuffer: RuleProps = {
  id: "_.isBuffer",
  blocks: [
    {
      type: "title",
      title: { id: "_.isBuffer-title", children: "_.isBuffer" },
    },
    {
      type: "description",
      description: {
        id: "_.isBuffer-description",
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
        id: "_.isBuffer-code",
        language: "ts",
        children: `const isBuff = _.isBuffer(3);
console.log(isBuff); // false;

const isBuff2 = _.isBuffer(new Buffer(3));
console.log(isBuff2); // true;

const isBuff3 = _.isBuffer(new ArrayBuffer(3));
console.log(isBuff3); // false;`,
      },
    },
  ],
};

export default isBuffer;
