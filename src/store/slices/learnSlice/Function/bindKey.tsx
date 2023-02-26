import React from "react";
import Link from "@src/components/common/Link";
import { RuleProps } from "@src/components/Rule";

const bindKey: RuleProps = {
  id: "_.bindKey",
  blocks: [
    {
      type: "title",
      title: { id: "_.bindKey-title", children: "_.bindKey" },
    },
    {
      type: "description",
      description: {
        id: "_.bindKey-description",
        children: (
          <>
            Принимает <b>объект, ключ и аргументы</b>, возвращает <b>функцию объекта по ключу</b>, которая после вызова
            с аргументами будет иметь this равным объекту
            <div>
              Если в <Link>_.bindKey</Link> нельзя сразу передать промежуточный аргумент, то вместо него можно передать{" "}
              <b>_</b>
            </div>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.bindKey-code",
        language: "ts",
        children: `const author = {
  smile: ":-)",
  greeting: function (name: string, greet: string) {
    return name + ", " + greet + " " + this.smile;
  },
};

const bindedKeyGreet = _.bindKey(author, "greeting", _, "hello");
const helloCat = bindedKeyGreet("Cat");
console.log(helloCat); // "Cat, hello :-)";`,
      },
    },
  ],
};

export default bindKey;
