import React from "react";
import Link from "@src/components/common/Link";
import { RuleProps } from "@src/components/Rule";

const sortedIndexOf: RuleProps = {
  id: "_.sortedIndexOf",
  blocks: [
    {
      type: "title",
      title: { id: "_.sortedIndexOf-title", children: "_.sortedIndexOf" },
    },
    {
      type: "description",
      description: {
        id: "_.sortedIndexOf-description",
        children: (
          <>
            Принимает <b>массив и значение</b>, возвращает <b>индекс</b>, которым должно быть вставлено значение для
            сохранения сортировки по возрастанию
            <div>
              Аналогичен <Link href="#_.sortedIndex">_.sortedIndex</Link> и{" "}
              <Link href="#_.indexOf-title">_.indexOf</Link>
            </div>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.sortedIndexOf-code",
        language: "ts",
        children: `const baseArray = [2, 3, 15, 34, 42];

const index = _.sortedIndexOf(baseArray, 20);
console.log(index); // 3;`,
      },
    },
  ],
};

export default sortedIndexOf;
