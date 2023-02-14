import React from "react";
import Link from "@src/components/common/Link";
import { RuleProps } from "@src/components/Rule";

const zipUnzip: RuleProps = {
  id: "_.zip, _.unzip",
  blocks: [
    {
      type: "title",
      title: { id: "_.zip-title, _.unzip-title", children: "_.zip, _.unzip" },
    },
    {
      type: "description",
      description: {
        id: "_.zip-description",
        children: (
          <>
            Принимает <b>массивы</b>, возвращает <b>массив массивов</b>, где N-ый массив содержит N-ные элементы
            принятых массивов
            <div>
              Если массив не имеет N-ного элемента, то значение заполняется <b>undefined</b>
            </div>
            <div>
              <Link>_.unzip</Link> делает тоже самое, но принимает массив массивов
            </div>
          </>
        ),
      },
    },
    {
      type: "comparisonCode",
      comparisonCode: {
        id: "_.zip-comparisonCode, _.unzip-comparisonCode",
        codesProps: [
          {
            id: "_.zip-code",
            language: "ts",
            children: `const baseArray = [1, 5, 2, 1, 5];
const baseArray2 = [2, 4, 6, 8];
const baseArray3 = [3, 8];
            
const ziped = _.zip(baseArray, baseArray2, baseArray3);
console.log(ziped);
// [
//   [1, 2, 3],
//   [5, 4, 8],
//   [2, 6, undefined],
//   [1, 8, undefined],
//   [5, undefined, undefined],
//   [3, undefined, undefined],
// ];`,
          },
          {
            id: "_.unzip-code",
            language: "ts",
            children: `const baseArray = [1, 5, 2, 1, 5];
const baseArray2 = [2, 4, 6, 8];
const baseArray3 = [3, 8];
            
const unziped = _.unzip([baseArray, baseArray2, baseArray3]);
console.log(unziped);
// [
//   [1, 2, 3],
//   [5, 4, 8],
//   [2, 6, undefined],
//   [1, 8, undefined],
//   [5, undefined, undefined],
//   [3, undefined, undefined],
// ];`,
          },
        ],
      },
    },
  ],
};

export default zipUnzip;
