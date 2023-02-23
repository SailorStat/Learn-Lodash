import React from "react";
import { RuleProps } from "@src/components/Rule";

const reduce: RuleProps = {
  id: "_.reduce",
  blocks: [
    {
      type: "title",
      title: { id: "_.reduce-title", children: "_.reduce" },
    },
    {
      type: "description",
      description: {
        id: "_.reduce-description",
        children: (
          <>
            Принимает <b>массив и функцию преобразования и аккумулятор</b>, возвращает аккумулятор после применения
            преобразования над каждым элементом
            <div>
              Функция преобразования получает первым аргументом аккумулятор, вторым - текущее значение, третьим - индекс
              элемента, четвёртым - исходный массив
            </div>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.reduce-code",
        language: "ts",
        children: `const baseArray = [1.3, 1.2, 4.5, 4.6];

const reduced = _.reduce(baseArray, (acc, el) => acc + el, 0);
console.log(reduced); // 11.6;`,
      },
    },
  ],
};

export default reduce;
