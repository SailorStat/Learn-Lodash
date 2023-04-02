import React from "react";
import { RuleProps } from "@src/components/Rule";

const replace: RuleProps = {
  id: "_.replace",
  blocks: [
    {
      type: "title",
      title: { id: "_.replace-title", children: "_.replace" },
    },
    {
      type: "description",
      description: {
        id: "_.replace-description",
        children: (
          <>
            Принимает <b>строку, подстроку и новую подстроку</b>. Bозвращает <b>строку</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.replace-code",
        language: "ts",
        children: `console.log(_.replace("Hi Fred Fredue", "Fred", "Barney")); // "Hi Barney Fredue";`,
      },
    },
  ],
};

export default replace;
