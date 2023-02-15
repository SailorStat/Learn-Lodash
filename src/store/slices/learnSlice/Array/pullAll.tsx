import React from "react";
import Link from "@src/components/common/Link";
import Warning from "@src/components/common/Warning";
import { RuleProps } from "@src/components/Rule";

const pullAll: RuleProps = {
  id: "_.pullAll",
  blocks: [
    {
      type: "title",
      title: { id: "_.pullAll-title", children: "_.pullAll" },
    },
    {
      type: "description",
      description: {
        id: "_.pullAll-description",
        children: (
          <>
            Принимает <b>2 массива</b>, возвращает <b>1-ый массив</b> без значений из 2-го массива
            <Warning>Мутирует исходный массив</Warning>
            <div>
              Для исключения значений без мутации рекомендуется использовать{" "}
              <Link href="#_.difference">_.difference</Link>
            </div>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.pullAll-code",
        language: "ts",
        children: `const baseArray = [1, 5, 2, 1];

const pulledAll = _.pullAll(baseArray, [5, 2]);
console.log(pulledAll); // [1, 1];
console.log(baseArray); // [1, 1];`,
      },
    },
  ],
};

export default pullAll;
