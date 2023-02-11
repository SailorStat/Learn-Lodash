import React from "react";
import Warning from "@src/components/common/Warning";
import { RuleProps } from "@src/components/Rule";

const reverse: RuleProps = {
  id: "_.reverse",
  blocks: [
    {
      type: "title",
      title: { id: "_.reverse-title", children: "_.reverse" },
    },
    {
      type: "description",
      description: {
        id: "_.reverse-description",
        children: (
          <>
            Принимает <b>массив</b>, возвращает <b>массив</b> в обратном порядке
            <Warning>Мутирует начальный массив</Warning>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.reverse-code",
        language: "ts",
        children: `const baseArray = [{ a: 31 }, { a: 5 }, { a: 32 }, { a: 41 }];

const reversed = _.reverse(baseArray);
console.log(reversed); // [{ a: 41 }, { a: 32 }, { a: 5 }, { a: 31 }];
console.log(baseArray); // [{ a: 41 }, { a: 32 }, { a: 5 }, { a: 31 }];`,
      },
    },
  ],
};

export default reverse;
