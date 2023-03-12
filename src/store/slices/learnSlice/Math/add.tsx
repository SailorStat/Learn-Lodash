import React from "react";
import { RuleProps } from "@src/components/Rule";

const add: RuleProps = {
  id: "_.add",
  blocks: [
    {
      type: "title",
      title: { id: "_.add-title", children: "_.add" },
    },
    {
      type: "description",
      description: {
        id: "_.add-description",
        children: (
          <>
            Принимает <b>два слагаемых</b>. Bозвращает <b>число</b> сумму чисел
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.add-code",
        language: "ts",
        children: `const added = _.add(2, 3);
console.log(added); // 5;`,
      },
    },
  ],
};

export default add;
