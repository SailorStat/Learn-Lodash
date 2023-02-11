import React from "react";
import Link from "@src/components/common/Link";
import { RuleProps } from "@src/components/Rule";

const sortedLastIndexOf: RuleProps = {
  id: "_.sortedLastIndexOf",
  blocks: [
    {
      type: "title",
      title: { id: "_.sortedLastIndexOf-title", children: "_.sortedLastIndexOf" },
    },
    {
      type: "description",
      description: {
        id: "_.sortedLastIndexOf-description",
        children: (
          <>
            Принимает <b>массив и значение</b>, возвращает <b>индекс</b>, которым должно быть вставлено значение для
            сохранения сортировки по возрастанию. Поиск индекса идёт с конца
            <div>
              Аналогичен <Link href="#_.lastIndexOf-description">_.lastIndexOf</Link>
            </div>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.sortedLastIndexOf-code",
        language: "ts",
        children: `const baseArray = [1, 2, 3, 3, 4];

const index = _.sortedLastIndexOf(baseArray, 3);
console.log(index); // 3;`,
      },
    },
  ],
};

export default sortedLastIndexOf;
