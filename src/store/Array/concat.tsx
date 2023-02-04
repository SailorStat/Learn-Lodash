import React from "react";

import { RuleProps } from "../../components/Rule";

const concat: RuleProps = {
  id: "_.concat",
  blocks: [
    {
      type: "title",
      title: { id: "_.concat-title", children: "_.concat" },
    },
    {
      type: "description",
      description: {
        id: "_.concat-description",
        children: (
          <>
            Принимает <b>значения и массивы</b>, возвращает <b>массив из значений, значений массивов</b> с типом первого
            переданного значения или значений (если первое значение - массив), null
            <div>Остальные значения пропускаются</div>
            <i>Работает криво, не понятно, очень неочевидное поведение</i>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.concat-code",
        language: "ts",
        children: `const baseArray = [0, 1, "", [0]];

const concated = _.concat(baseArray, 2, [4, 0, "text", [1, undefined, ""]], null);
console.log(concated); // [0, 1, "", [0], 2, 4, 0, "text", [1, null, ""], null];;`,
      },
    },
  ],
};

export default concat;
