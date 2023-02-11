import React from "react";
import { RuleProps } from "@src/components/Rule";

const sortedLastIndexBy: RuleProps = {
  id: "_.sortedLastIndexBy",
  blocks: [
    {
      type: "title",
      title: { id: "_.sortedLastIndexBy-title", children: "_.sortedLastIndexBy" },
    },
    {
      type: "description",
      description: {
        id: "_.sortedLastIndexBy-description",
        children: (
          <>
            Принимает <b>массив, значение и функцию обработки значений</b>, возвращает <b>индекс</b>, которым должно
            быть вставлено значение, чтобы сохранить порядок сортировки по возрастанию с учётом функции обработки
            значения
            <div>Поиск ведётся с конца массива</div>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.sortedLastIndexBy-code",
        language: "ts",
        children: `const baseArray = [1.1, 2.2, 3.3, 4.4, 5.5, 6.6, 7.7, 8.8];

// Округление в близжайшую сторону
const index = _.sortedLastIndexBy(baseArray, 7, Math.round);
console.log(index); // 6;
// => [1.1, 2.2, 3.3, 4.4, 5.5, 6.6, 7, 7.7, 8.8];`,
      },
    },
    {
      type: "description",
      description: {
        id: "_.sortedIndexBy2-description",
        children: (
          <>
            Принимает <b>массив, значение и ключ</b>, возвращает <b>массив</b> значений, возвращает <b>индекс</b>,
            которым должно быть вставлено значение, чтобы сохранить порядок сортировки по возрастанию с учётом значения
            по ключу
            <div>Поиск ведётся с конца массива</div>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.sortedIndexBy2-code",
        language: "ts",
        children: `const baseArray = [{ a: 1.1 }, { a: 2.2 }, { a: 3.3 }, { a: 4.4 }, { a: 5.5 }, { a: 6.6 }, { a: 7.7 }, { a: 8.8 }];

// Округление в близжайшую сторону
const index = _.sortedLastIndexBy(baseArray, { a: 7 }, "a");
console.log(index); // 6;
// => [1.1, 2.2, 3.3, 4.4, 5.5, 6.6, 7, 7.7, 8.8];`,
      },
    },
  ],
};

export default sortedLastIndexBy;
