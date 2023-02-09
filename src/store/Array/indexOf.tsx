import React from "react";
import Link from "@src/components/common/Link/Link";
import { RuleProps } from "@src/components/Rule";

const indexOf: RuleProps = {
  id: "_.indexOf",
  blocks: [
    {
      type: "title",
      title: { id: "_.indexOf-title", children: "_.indexOf" },
    },
    {
      type: "description",
      description: {
        id: "_.indexOf-description",
        children: (
          <>
            <div>
              Упрощённая версия <Link href="#_.findIndex">_.findIndex</Link>
            </div>
            <div>
              Принимает <b>массив и искомое значение</b>, возвращает <b>индекс</b> первого совпавшего значения
            </div>
            <div>Можно указать индекс начала поиска. При отрицательном индексе поиск начинается с конца</div>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.indexOf-code",
        language: "ts",
        children: `const baseArray = [1, 2, 3, 2, 8, 13];

const index = _.indexOf(baseArray, 2, 3);
console.log(index); // 3;`,
      },
    },
  ],
};

export default indexOf;
