import React from "react";
import Warning from "@src/components/common/Warning";
import { RuleProps } from "@src/components/Rule";

const fill: RuleProps = {
  id: "_.fill",
  blocks: [
    {
      type: "title",
      title: { id: "_.fill-title", children: "_.fill" },
    },
    {
      type: "description",
      description: {
        id: "_.fill-description",
        children: (
          <>
            Принимает <b>массив и значение</b> для замены каждого элемента , возвращает <b>изменённый массив</b>
            <Warning>Мутирующая функция</Warning>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.fill-code",
        language: "ts",
        children: `const baseArray = [1, 2, undefined, null];

const filledCenter = _.fill(baseArray, "a", 1, 3);
console.log(filledCenter); // [1, "a", "a", null];

const filledAll = _.fill(baseArray, "a");
console.log(filledAll); // ["a", "a", "a", "a"];
console.log(baseArray); // ["a", "a", "a", "a"];`,
      },
    },
  ],
};

export default fill;
