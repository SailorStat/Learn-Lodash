import React from "react";
import { RuleProps } from "@src/components/Rule";

const dropRight: RuleProps = {
  id: "_.dropRight",
  blocks: [
    {
      type: "title",
      title: { id: "_.dropRight-title", children: "_.dropRight" },
    },
    {
      type: "description",
      description: {
        id: "_.dropRight-description",
        children: (
          <>
            Принимает{" "}
            <b>
              массив и значение <i>N</i>
            </b>
            , возвращает{" "}
            <b>
              массив без последних <i>N</i> значений
            </b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.dropRight-code",
        language: "ts",
        children: `const baseArray = [1, 2, 3, 4];

const droppedRight = _.dropRight(baseArray);
console.log(droppedRight); // [1, 2, 3];

const droppedRightTwo = _.dropRight(baseArray, 2);
console.log(droppedRightTwo); // [1, 2];`,
      },
    },
  ],
};

export default dropRight;
