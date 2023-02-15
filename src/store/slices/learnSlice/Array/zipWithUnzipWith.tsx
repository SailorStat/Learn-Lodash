import React from "react";
import Link from "@src/components/common/Link";
import { RuleProps } from "@src/components/Rule";

const zipWithUnzipWith: RuleProps = {
  id: "_.zipWith, _.unzipWith",
  blocks: [
    {
      type: "title",
      title: { id: "_.zipWith-title, _.unzipWith-title", children: "_.zipWith, _.unzipWith" },
    },
    {
      type: "description",
      description: {
        id: "_.zipWith-description",
        children: (
          <>
            Принимает <b>массивы и функцию преобразования</b>, возвращает <b>массив</b>, где N-ый объект содержит N-ные
            элементы после преобразования
            <div>
              Если массив не имеет N-ного элемента, то значение заполняется <b>undefined</b>
            </div>
            <div>
              <Link>_.unzipWith</Link> делает тоже самое, но принимает массив массивов
            </div>
          </>
        ),
      },
    },
    {
      type: "comparisonCode",
      comparisonCode: {
        id: "_.zipWith-comparisonCode, _.unzipWith-comparisonCode",
        codesProps: [
          {
            id: "_.zipWith-code",
            language: "ts",
            children: `const baseArray = [0, 1, 2, 3, 4];
const baseArray2 = [2, 4, 6, 8];
const baseArray3 = [3, 8];

const transformation = (
  a: number,
  b?: number,
  c?: number,
) => {
  return { [a]: [b, c] };
};

const zipedWith = _.zipWith(
  baseArray,
  baseArray2,
  baseArray3,
  transformation,
);
console.log(zipedWith);
// [
//   { "0": [2, 3] },
//   { "1": [4, 8] },
//   { "2": [6, undefined] },
//   { "3": [8, undefined] },
//   { "4": [undefined, undefined] },
// ];`,
          },
          {
            id: "_.unzipWith-code",
            language: "ts",
            children: `const baseArray = [0, 1, 2, 3, 4];
const baseArray2 = [2, 4, 6, 8];
const baseArray3 = [3, 8];

const transformation = (
  a: number,
  b?: number,
  c?: number,
) => {
  return { [a]: [b, c] };
};

const zipedWith = _.unzipWith(
  [baseArray, baseArray2, baseArray3],
  transformation,
);
console.log(zipedWith);
// [
//   { "0": [2, 3] },
//   { "1": [4, 8] },
//   { "2": [6, undefined] },
//   { "3": [8, undefined] },
//   { "4": [undefined, undefined] },
// ];`,
          },
        ],
      },
    },
  ],
};

export default zipWithUnzipWith;
