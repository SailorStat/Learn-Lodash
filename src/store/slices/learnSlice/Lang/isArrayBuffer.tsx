import React from "react";
import { RuleProps } from "@src/components/Rule";

const isArrayBuffer: RuleProps = {
  id: "_.isArrayBuffer",
  blocks: [
    {
      type: "title",
      title: { id: "_.isArrayBuffer-title", children: "_.isArrayBuffer" },
    },
    {
      type: "description",
      description: {
        id: "_.isArrayBuffer-description",
        children: (
          <>
            Принимает <b>значениe</b>, возвращает <b>true</b>, если значение - это ArrayBuffer объект. Иначе функция
            вернёт <b>false</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.isArrayBuffer-code",
        language: "ts",
        children: `const isArrBuff = _.isArrayBuffer(new ArrayBuffer(2));
console.log(isArrBuff); // true;

const isArrBuff2 = _.isArrayBuffer(new Array(2));
console.log(isArrBuff2); // false;`,
      },
    },
  ],
};

export default isArrayBuffer;
