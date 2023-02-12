import React from "react";
import Link from "@src/components/common/Link";
import { RuleProps } from "@src/components/Rule";

const sortedUniqBy: RuleProps = {
  id: "_.sortedUniqBy",
  blocks: [
    {
      type: "title",
      title: { id: "_.sortedUniqBy-title", children: "_.sortedUniqBy" },
    },
    {
      type: "description",
      description: {
        id: "_.sortedUniqBy-description",
        children: (
          <>
            Принимает <b>сортированный массив и функцию преобразования</b>, возвращает <b>массив</b> без повторяющихся
            значений с учётом применения функции преобразования к каждому элементу
            <div>
              Аналогичен <Link href="#_.uniqBy">_.uniqBy</Link>
            </div>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.sortedUniqBy-code",
        language: "ts",
        children: `const baseArray = [1.1, 1.2, 2.2, 2.3, 4.5, 5.5, 5.6, 6.1];

// Округление в близжайшую сторону
const sorted = _.sortedUniqBy(baseArray, Math.round);
console.log(sorted); // [1.1, 2.2, 4.5, 5.5];`,
      },
    },
  ],
};

export default sortedUniqBy;
