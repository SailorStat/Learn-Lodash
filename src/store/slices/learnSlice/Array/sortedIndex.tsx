import React from "react";
import { RuleProps } from "@src/components/Rule";

const sortedIndex: RuleProps = {
  id: "_.sortedIndex",
  blocks: [
    {
      type: "title",
      title: { id: "_.sortedIndex-title", children: "_.sortedIndex" },
    },
    {
      type: "description",
      description: {
        id: "_.sortedIndex-description",
        children: (
          <>
            Принимает <b>массив и значение</b>, возвращает <b>индекс</b>, которым должно быть вставлено значение для
            сохранения сортировки по возрастанию
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.sortedIndex-code",
        language: "ts",
        children: `const baseArray = [2, 3, 15, 34, 42];

const index = _.sortedIndex(baseArray, 20);
console.log(index); // 3;`,
      },
    },
  ],
};

export default sortedIndex;
