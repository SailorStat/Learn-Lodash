import React from "react";
import Link from "@src/components/common/Link";
import Warning from "@src/components/common/Warning";
import { RuleProps } from "@src/components/Rule";

const pullRemove: RuleProps = {
  id: "_.pull, _.remove",
  blocks: [
    {
      type: "title",
      title: { id: "_.pull-title", children: "_.remove" },
    },
    {
      type: "description",
      description: {
        id: "_.pull-description",
        children: (
          <>
            <div>
              Принимает <b>массив и исключаемые значения</b>, возвращает <b>массив</b> без переданных значений
            </div>
          </>
        ),
      },
    },
    {
      type: "description",
      description: {
        id: "_.remove-description",
        children: (
          <>
            <div>
              Принимает <b>массив и исключающую функцию</b>, возвращает <b>массив</b> исключённых значений
            </div>
          </>
        ),
      },
    },
    {
      type: "description",
      description: {
        id: "_.pull-description, _.remove-description",
        children: (
          <>
            <Warning>Мутирующие функции. Удаляют значения из исходного массива</Warning>
            <div>
              <i>
                Для получения массива без указанных значений рекомендуется использовать{" "}
                <Link href="#_.without">_.without</Link>
              </i>
            </div>
          </>
        ),
      },
    },
    {
      type: "comparisonCode",
      comparisonCode: {
        id: "_.pull-comparisonCode, _.remove-comparisonCode",
        codesProps: [
          {
            id: "_.pull-code",
            language: "ts",
            children: `const baseArray = [1, 2, 3, 2, 8, 2];

const remains = _.pull(baseArray, 2, 3);
console.log(remains); // [1, 8];
console.log(baseArray); // [1, 8];`,
          },
          {
            id: "_.remove-code",
            language: "ts",
            children: `const baseArray = [1, 2, 3, 2, 8, 2];
const callback = (value: number) => [2, 3].includes(value);

const remains = _.remove(baseArray, callback);
console.log(remains); // [2, 3, 2, 2];
console.log(baseArray); // [1, 8];`,
          },
        ],
      },
    },
  ],
};

export default pullRemove;
