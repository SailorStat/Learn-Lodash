import React from "react";
import { RuleProps } from "@src/components/Rule";

const groupBy: RuleProps = {
  id: "_.groupBy",
  blocks: [
    {
      type: "title",
      title: { id: "_.groupBy-title", children: "_.groupBy" },
    },
    {
      type: "description",
      description: {
        id: "_.groupBy-description",
        children: (
          <>
            Принимает <b>массив и функцию преобразования или свойсво</b>, возвращает <b>объект</b>, где ключ -
            уникальное значение после преобразования или получения значения по свойству, а значение - массив начальных
            значений, которые после преобразования вернули значение ключа
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.groupBy-code",
        language: "ts",
        children: `// Округление в близжайшую сторону
const groupedBy = _.groupBy([1.3, 1.2, 4.5, 4.6], Math.round);
console.log(groupedBy); // { "1": [1.3, 1.2], "5": [4.5, 4.6] };

const groupedBy2 = _.groupBy(["la", "lala", "lala"], "length");
console.log(groupedBy2); // { "2": ["la"], "4": ["lala", "lala"] };`,
      },
    },
  ],
};

export default groupBy;
