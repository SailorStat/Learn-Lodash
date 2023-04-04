import React from "react";
import { RuleProps } from "@src/components/Rule";

const bindAll: RuleProps = {
  id: "_.bindAll",
  blocks: [
    {
      type: "title",
      title: { id: "_.bindAll-title", children: "_.bindAll" },
    },
    {
      type: "description",
      description: {
        id: "_.bindAll-description",
        children: (
          <>
            Принимает <b>объект и строку или массив строк</b>. Bозвращает <b>объект</b>, в котором this привязан к
            объекту
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.bindAll-code",
        language: "ts",
        children: `const view = {
  label: "docs",
  click: function () {
    console.log("clicked " + this.label);
  },
};

_.bindAll(view, ["click"]);`,
      },
    },
  ],
};

export default bindAll;
