import React from "react";

import { RuleProps } from "../../components/Rule";

const drop: RuleProps = {
  id: "_.drop",
  blocks: [
    {
      type: "title",
      title: { id: "_.drop-title", children: "_.drop" },
    },
    {
      type: "description",
      description: {
        id: "_.drop-description",
        children: (
          <>
            Принимает{" "}
            <b>
              массив и значение <i>N</i>
            </b>
            , возвращает{" "}
            <b>
              массив без первых <i>N</i> значений
            </b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.drop-code",
        language: "ts",
        children: `const baseArray = [1, 2, 3, 4];

const dropped = _.drop(baseArray);
console.log(dropped); // [2, 3, 4];

const droppedTwo = _.drop(baseArray, 2);
console.log(droppedTwo); // [3, 4];`,
      },
    },
  ],
};

export default drop;
