import React from "react";
import { RuleProps } from "@src/components/Rule";

const camelCase: RuleProps = {
  id: "_.camelCase",
  blocks: [
    {
      type: "title",
      title: { id: "_.camelCase-title", children: "_.camelCase" },
    },
    {
      type: "description",
      description: {
        id: "_.camelCase-description",
        children: (
          <>
            Принимает <b>строку</b>. Bозвращает <b>строку</b> в camelCase начертании
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.camelCase-code",
        language: "ts",
        children: `console.log(_.camelCase("Foo Bar")); // "fooBar";
console.log(_.camelCase("--foo-bar--")); // "fooBar";
console.log(_.camelCase("__FOO_BAR__")); // "fooBar";`,
      },
    },
  ],
};

export default camelCase;
