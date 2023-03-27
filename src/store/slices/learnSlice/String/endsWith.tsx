import React from "react";
import { RuleProps } from "@src/components/Rule";

const endsWith: RuleProps = {
  id: "_.endsWith",
  blocks: [
    {
      type: "title",
      title: { id: "_.endsWith-title", children: "_.endsWith" },
    },
    {
      type: "description",
      description: {
        id: "_.endsWith-description",
        children: (
          <>
            Принимает <b>строку, подстраку и индекс</b>. Bозвращает <b>true</b>, если строка заканчивается указанной
            подстрокой на указанном индексе, либо сама строка так заканчивается, если индекс не указан
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.endsWith-code",
        language: "ts",
        children: `const isEnded =  _.endsWith("example", "le");
console.log(isEnded); // true;
         
const isEnded2 =   _.endsWith("example", "xa", 3);
console.log(isEnded2); // true;`,
      },
    },
  ],
};

export default endsWith;
