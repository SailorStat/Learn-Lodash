import React from "react";
import { RuleProps } from "@src/components/Rule";

const after: RuleProps = {
  id: "_.after",
  blocks: [
    {
      type: "title",
      title: { id: "_.after-title", children: "_.after" },
    },
    {
      type: "description",
      description: {
        id: "_.after-description",
        children: (
          <>
            Принимает <b>N-число и функцию</b>, возвращает <b>функцию</b>, которая будет вызвана каждый раз после вызова
            функции N-раз
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.after-code",
        language: "ts",
        children: `const done = _.after(2, () => {
  console.log("done saving!");
});

done();
done(); // "done saving!";
done(); // "done saving!";`,
      },
    },
  ],
};

export default after;
