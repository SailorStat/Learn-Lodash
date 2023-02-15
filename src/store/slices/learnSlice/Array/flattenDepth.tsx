import React from "react";
import { RuleProps } from "@src/components/Rule";

const flattenDepth: RuleProps = {
  id: "_.flattenDepth",
  blocks: [
    {
      type: "title",
      title: { id: "_.flattenDepth-title", children: "_.flattenDepth" },
    },
    {
      type: "description",
      description: {
        id: "_.flattenDepth-description",
        children: (
          <>
            Принимает <b>массив</b>, возвращает <b>массив из всех значений массивов на указанный уровень вложенности</b>{" "}
            (по умолчанию на 1 уровень вложенности)
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.flattenDepth-code",
        language: "ts",
        children: `const baseArray = [{ a: 1 }, [{ a: 5 }, [{ a: 2 }, [{ a: 1 }]]]];

const flattedDepth = _.flattenDepth(baseArray, 2);
console.log(flattedDepth); // [{ a: 1 }, { a: 5 }, { a: 2 }, [{ a: 1 }]];

const flattedDepth2 = _.flattenDepth(baseArray);
console.log(flattedDepth2); // [{ a: 1 }, { a: 5 }, [{ a: 2 }, [{ a: 1 }]]];`,
      },
    },
  ],
};

export default flattenDepth;
