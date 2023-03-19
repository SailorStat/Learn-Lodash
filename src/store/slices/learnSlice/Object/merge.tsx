import React from "react";
import { RuleProps } from "@src/components/Rule";

const merge: RuleProps = {
  id: "_.merge",
  blocks: [
    {
      type: "title",
      title: { id: "_.merge-title", children: "_.merge" },
    },
    {
      type: "description",
      description: {
        id: "_.merge-description",
        children: (
          <>
            Принимает <b>объекты</b>. Возвращает <b>объект</b>, полученный в результате рекурсивного слияния
            <div>
              <i>Неочевидное поведение</i>
            </div>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.merge-code",
        language: "ts",
        children: `const baseObject = { a: { c: 1 }, b: 3, f: 6 };

const merged = _.merge(baseObject, { a: { c: 2, d: 5 }, b: 4, f: 6, g: 7 });
console.log(merged); // { a: { c: 2, d: 5 }, b: 4, f: 6, g: 7 };`,
      },
    },
  ],
};

export default merge;
