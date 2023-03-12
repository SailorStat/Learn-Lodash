import React from "react";
import { RuleProps } from "@src/components/Rule";

const floor: RuleProps = {
  id: "_.floor",
  blocks: [
    {
      type: "title",
      title: { id: "_.floor-title", children: "_.floor" },
    },
    {
      type: "description",
      description: {
        id: "_.floor-description",
        children: (
          <>
            Принимает <b>число и индекс</b>. Bозвращает <b>число</b> после округления в меньшую сторону до указанного
            количества знаков
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.floor-code",
        language: "ts",
        children: `const floored = _.floor(2.12);
console.log(floored); // 2;

const floored2 = _.floor(2.12, 1);
console.log(floored2); // 2.1;

const floored3 = _.floor(21.2, -1);
console.log(floored3); // 20;`,
      },
    },
  ],
};

export default floor;
