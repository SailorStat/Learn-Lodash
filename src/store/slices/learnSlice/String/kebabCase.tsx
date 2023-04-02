import React from "react";
import { RuleProps } from "@src/components/Rule";

const kebabCase: RuleProps = {
  id: "_.kebabCase",
  blocks: [
    {
      type: "title",
      title: { id: "_.kebabCase-title", children: "_.kebabCase" },
    },
    {
      type: "description",
      description: {
        id: "_.kebabCase-description",
        children: (
          <>
            Принимает <b>строку</b>. Bозвращает <b>строку</b>, в которой все буквы маленькие, между словами тире
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.kebabCase-code",
        language: "ts",
        children: `console.log(_.kebabCase("Foo Bar")); // "foo-bar";
console.log(_.kebabCase("FOO BAR")); // "foo-bar";
console.log(_.kebabCase("__foo_bar__")); // "foo-bar";`,
      },
    },
  ],
};

export default kebabCase;
