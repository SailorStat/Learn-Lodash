import React from "react";
import Link from "@src/components/common/Link";
import { RuleProps } from "@src/components/Rule";

const sortedUniq: RuleProps = {
  id: "_.sortedUniq",
  blocks: [
    {
      type: "title",
      title: { id: "_.sortedUniq-title", children: "_.sortedUniq" },
    },
    {
      type: "description",
      description: {
        id: "_.sortedUniq-description",
        children: (
          <>
            Принимает <b>сортированный массив</b>, возвращает <b>массив</b> без повторяющихся значений
            <div>
              Аналогичен <Link href="#_.uniq">_.uniq</Link>
            </div>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.sortedUniq-code",
        language: "ts",
        children: `const baseArray = [1, 2, 2, 5];

const sorted = _.sortedUniq(baseArray);
console.log(sorted); // [1, 2, 5];`,
      },
    },
  ],
};

export default sortedUniq;
