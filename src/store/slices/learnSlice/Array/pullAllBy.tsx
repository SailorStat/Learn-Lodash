import React from "react";
import Link from "@src/components/common/Link";
import Warning from "@src/components/common/Warning";
import { RuleProps } from "@src/components/Rule";

const pullAllBy: RuleProps = {
  id: "_.pullAllBy",
  blocks: [
    {
      type: "title",
      title: { id: "_.pullAllBy-title", children: "_.pullAllBy" },
    },
    {
      type: "description",
      description: {
        id: "_.pullAllBy-description",
        children: (
          <>
            Принимает <b>2 массива и функицю преобразования значений</b>, возвращает <b>массив</b> из значений первого
            массива, которые после преобразования не встречаются среди преобразованных значений второго массива
            <Warning>Мутирует исходный массив</Warning>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.pullAllBy-code",
        language: "ts",
        children: `const baseArray = [1.1, 2.2, 3.3, 4.4, 5.5, 6.6, 7.7, 8.8];
const baseArray2 = [1, 2, 3, 5, 8];

// Округление в близжайшую сторону
const pulledAllBy = _.pullAllBy(baseArray, baseArray2, Math.round);
console.log(pulledAllBy); // [4.4, 5.5, 6.6, 8.8];
console.log(baseArray); // [4.4, 5.5, 6.6, 8.8];`,
      },
    },
    {
      type: "description",
      description: {
        id: "_.pullAllBy2-description",
        children: (
          <>
            Принимает <b>массивы и ключ</b>, возвращает <b>массив</b> значений, у которых внутреннее значение по ключу
            встречается только в первом массиве
            <Warning>Мутирует исходный массив</Warning>
            <div>
              Для исключения значений без мутации рекомендуется использовать{" "}
              <Link href="#_.differenceBy">_.differenceBy</Link>
            </div>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.pullAllBy2-code",
        language: "ts",
        children: `const baseArray = [{ 0: 12, 1: 42 }, [12, 42]];

const pulledAllBy = _.pullAllBy(baseArray, [[12, 42]], 0);
console.log(pulledAllBy); // [];
console.log(baseArray); // [];`,
      },
    },
  ],
};

export default pullAllBy;
