import React from "react";
import { RuleProps } from "@src/components/Rule";

const countBy: RuleProps = {
  id: "_.countBy",
  blocks: [
    {
      type: "title",
      title: { id: "_.countBy-title", children: "_.countBy" },
    },
    {
      type: "description",
      description: {
        id: "_.countBy-description",
        children: (
          <>
            Принимает <b>массив и функцию преобразования или свойсво</b>, возвращает <b>объект</b>, где ключ -
            уникальное значение после преобразования или получения значения по свойству, а значение - количество
            повторений полученного значения
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.countBy-code",
        language: "ts",
        children: `// Округление в близжайшую сторону
const countedBy = _.countBy([1.3, 1.2, 4.5, 4.6], Math.round);
console.log(countedBy); // { 1: 2, 5: 2 };

const countedBy2 = _.countBy(["la", "lala", "lala"], "length");
console.log(countedBy2); // { 2: 1, 4: 2 };`,
      },
    },
  ],
};

export default countBy;
