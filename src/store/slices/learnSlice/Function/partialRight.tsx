import React from "react";
import Link from "@src/components/common/Link";
import { RuleProps } from "@src/components/Rule";

const partialRight: RuleProps = {
  id: "_.partialRight",
  blocks: [
    {
      type: "title",
      title: { id: "_.partialRight-title", children: "_.partialRight" },
    },
    {
      type: "description",
      description: {
        id: "_.partialRight-description",
        children: (
          <>
            Принимает <b>функцию и аргументы</b>, возвращает <b>функцию</b>, которая при вызове ожидает оставшиеся
            аргументы в обратном порядке и возвращается результат
            <div>
              Если в <Link>_.partialRight</Link> нельзя сразу передать аргумент, то вместо него можно передать <b>_</b>,
              а сам аргумент передать позже
            </div>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.partialRight-code",
        language: "ts",
        children: `const hello = (name: string, smile: string) => {
  return name + ", hello " + smile;
};

const partialRighted = _.partialRight(hello, "Cat");
const greet = partialRighted("^-^");
console.log(greet); // Cat, hello ^-^;

const partialRighted2 = _.partialRight(hello, _, "^-^");
const greet2 = partialRighted2("Cat");
console.log(greet2); // Cat, hello ^-^;`,
      },
    },
  ],
};

export default partialRight;
