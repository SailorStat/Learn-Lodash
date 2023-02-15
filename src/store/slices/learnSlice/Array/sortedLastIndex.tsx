import React from "react";
import { RuleProps } from "@src/components/Rule";

const sortedLastIndex: RuleProps = {
  id: "_.sortedLastIndex",
  blocks: [
    {
      type: "title",
      title: { id: "_.sortedLastIndex-title", children: "_.sortedLastIndex" },
    },
    {
      type: "description",
      description: {
        id: "_.sortedLastIndex-description",
        children: (
          <>
            Принимает <b>массив и значение</b>, возвращает <b>индекс</b>, которым должно быть вставлено значение для
            сохранения сортировки по возрастанию
            <div>Поиск ведётся с конца массива</div>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.sortedLastIndex-code",
        language: "ts",
        children: `const baseArray = [2, 3, 3, 3, 4];

const index = _.sortedLastIndex(baseArray, 3);
console.log(index); // 4;`,
      },
    },
  ],
};

export default sortedLastIndex;
