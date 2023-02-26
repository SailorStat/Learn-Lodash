import React from "react";
import Link from "@src/components/common/Link";
import { RuleProps } from "@src/components/Rule";

const bind: RuleProps = {
  id: "_.bind",
  blocks: [
    {
      type: "title",
      title: { id: "_.bind-title", children: "_.bind" },
    },
    {
      type: "description",
      description: {
        id: "_.bind-description",
        children: (
          <>
            Принимает <b>функцию, объект и аргументы</b>, возвращает <b>функцию</b>, которая после вызова с аргументами
            будет иметь this равным объекту
            <div>
              Если в <Link>_.bind</Link> нельзя сразу передать промежуточный аргумент, то вместо него можно передать{" "}
              <b>_</b>
            </div>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.bind-code",
        language: "ts",
        children: `const greeting = function (name: string, greet: string) {
  return name + ", " + greet + " " + this.smile;
};

const author = { smile: ":-)" };

const bindedGreet = _.bind(greeting, author, _, "hello");
const helloCat = bindedGreet("Cat");
console.log(helloCat); // "Cat, hello :-)";`,
      },
    },
  ],
};

export default bind;
