import React from "react";
import { RuleProps } from "@src/components/Rule";

const reduceRight: RuleProps = {
  id: "_.reduceRight",
  blocks: [
    {
      type: "title",
      title: { id: "_.reduceRight-title", children: "_.reduceRight" },
    },
    {
      type: "description",
      description: {
        id: "_.reduceRight-description",
        children: (
          <>
            Принимает <b>массив и функцию преобразования и аккумулятор</b>, возвращает аккумулятор после применения
            преобразования над каждым элементом, начиная с последнего
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
        id: "_.reduceRight-code",
        language: "ts",
        children: `const baseArray = [1.3, 1.2, 4.5, 4.6];

const reducedRight = _.reduceRight(
  baseArray,
  (acc, el) => {
    const sum = acc + el;
    console.log(sum);

    return sum;
  },
  0
);

// 4.6
// 9.1
// 10.299999999999999
// 11.6
console.log(reducedRight); // 11.6;`,
      },
    },
  ],
};

export default reduceRight;
