import React from "react";
import Link from "@src/components/common/Link";
import { RuleProps } from "@src/components/Rule";

const indexOfLastIndexOf: RuleProps = {
  id: "_.indexOf, _.lastIndexOf",
  blocks: [
    {
      type: "title",
      title: { id: "_.indexOf-title", children: "_.indexOf" },
    },
    {
      type: "description",
      description: {
        id: "_.indexOf-description, _.lastIndexOf-description",
        children: (
          <>
            <div>
              Упрощённая версия <Link href="#_.findIndex">_.findIndex</Link>
            </div>
            <div>
              Принимает <b>массив и искомое значение</b>, возвращает <b>индекс</b> первого совпавшего значения
            </div>
            <div id="_.lastIndexOf-description">
              Можно указать индекс начала поиска. При отрицательном индексе поиск начинается с конца
            </div>
            <div>
              Также для поиска с конца можно использовать <Link>_.lastIndexOf</Link>
            </div>
          </>
        ),
      },
    },
    {
      type: "comparisonCode",
      comparisonCode: {
        id: "_.indexOf-comparisonCode, _.lastIndexOf-comparisonCode",
        codesProps: [
          {
            id: "_.indexOf-code",
            language: "ts",
            children: `const baseArray = [1, 2, 3, 2, 8, 2];

const index = _.indexOf(baseArray, 2, 2);
console.log(index); // 3;`,
          },
          {
            id: "_.lastIndexOf-code",
            language: "ts",
            children: `const baseArray = [1, 2, 3, 2, 8, 2];

const index = _.lastIndexOf(baseArray, 2, 2);
console.log(index); // 1;`,
          },
        ],
      },
    },
  ],
};

export default indexOfLastIndexOf;
