import React from "react";
import { RuleProps } from "@src/components/Rule";

const before: RuleProps = {
  id: "_.before",
  blocks: [
    {
      type: "title",
      title: { id: "_.before-title", children: "_.before" },
    },
    {
      type: "description",
      description: {
        id: "_.before-description",
        children: (
          <>
            Принимает <b>N-число и функцию</b>, возвращает <b>функцию</b>, которая будет вызвана каждый раз до вызова
            функции N-раз
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.before-code",
        language: "ts",
        children: `const done = _.before(3, () => {
  console.log("done saving!");
});

done(); // "done saving!";
done(); // "done saving!";
done();`,
      },
    },
  ],
};

export default before;
