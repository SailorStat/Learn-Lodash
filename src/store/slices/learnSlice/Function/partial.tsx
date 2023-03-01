import React from "react";
import Link from "@src/components/common/Link";
import { RuleProps } from "@src/components/Rule";

const partial: RuleProps = {
  id: "_.partial",
  blocks: [
    {
      type: "title",
      title: { id: "_.partial-title", children: "_.partial" },
    },
    {
      type: "description",
      description: {
        id: "_.partial-description",
        children: (
          <>
            Принимает <b>функцию и аргументы</b>, возвращает <b>функцию</b>, которая при вызове ожидает оставшиеся
            аргументы и возвращается результат
            <div>
              Если в <Link>_.partial</Link> нельзя сразу передать аргумент, то вместо него можно передать <b>_</b>, а
              сам аргумент передать позже
            </div>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.partial-code",
        language: "ts",
        children: `const hello = (name: string, smile: string) => {
  return name + ", hello " + smile;
};

const partialed = _.partial(hello, "Cat");
const greet = partialed("^-^");
console.log(greet); // Cat, hello ^-^;

const partialed2 = _.partial(hello, _, "^-^");
const greet2 = partialed2("Cat");
console.log(greet2); // Cat, hello ^-^;`,
      },
    },
  ],
};

export default partial;
