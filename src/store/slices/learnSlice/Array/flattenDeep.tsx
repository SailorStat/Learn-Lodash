import React from "react";
import { RuleProps } from "@src/components/Rule";

const flattenDeep: RuleProps = {
  id: "_.flattenDeep",
  blocks: [
    {
      type: "title",
      title: { id: "_.flattenDeep-title", children: "_.flattenDeep" },
    },
    {
      type: "description",
      description: {
        id: "_.flattenDeep-description",
        children: (
          <>
            Принимает <b>массив</b>, возвращает <b>массив из всех распечатанных массивов до уровня значений</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.flattenDeep-code",
        language: "ts",
        children: `const baseArray = [{ a: 1 }, [{ a: 5 }, [{ a: 2 }, [{ a: 1 }]]]];

const flattedDeep = _.flattenDeep(baseArray);
console.log(flattedDeep); // [{ a: 1 }, { a: 5 }, { a: 2 }, { a: 1 }];`,
      },
    },
  ],
};

export default flattenDeep;
