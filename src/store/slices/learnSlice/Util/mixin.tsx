import React from "react";
import Warning from "@src/components/common/Warning";
import { RuleProps } from "@src/components/Rule";

const mixin: RuleProps = {
  id: "_.mixin",
  blocks: [
    {
      type: "title",
      title: { id: "_.mixin-title", children: "_.mixin" },
    },
    {
      type: "description",
      description: {
        id: "_.mixin-description",
        children: (
          <>
            Принимает <b>объект</b>. Bозвращает <b>объект</b>, который наследует свойства у объекта и записывает в его
            прототип this
            <Warning>Не заработало</Warning>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.mixin-code",
        language: "ts",
        children: `const vowels = (text: string) => _.filter(text, /[aeiou]/i.test);
_.mixin({ vowels });
console.log(_.vowels("fred"));

console.log(_("fred").vowels().value());

_.mixin({ vowels }, { chain: false });
console.log(_("fred").vowels());`,
      },
    },
  ],
};

export default mixin;
