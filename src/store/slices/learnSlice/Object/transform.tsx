import React from "react";
import Link from "@src/components/common/Link";
import { RuleProps } from "@src/components/Rule";

const transform: RuleProps = {
  id: "_.transform",
  blocks: [
    {
      type: "title",
      title: { id: "_.transform-title", children: "_.transform" },
    },
    {
      type: "description",
      description: {
        id: "_.transform-description",
        children: (
          <>
            Принимает <b>массив и функцию преобразования и аккумулятор</b>, возвращает аккумулятор после применения
            преобразования над каждым перечисляемым свойством
            <div>
              Функция преобразования получает первым аргументом аккумулятор, вторым - текущее значение, третьим - ключ
              элемента, четвёртым - исходный массив
            </div>
            <div>
              Похож на метод <Link href="_.reduce">_.reduce</Link>, кроме того, что аккумелятор меняется мутацией, а
              выполнение привывается возвращением false
            </div>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.transform-code",
        language: "ts",
        children: `const baseArray = { a: 0, b: 1, c: 2 };

const func = (acc, value, key) => {
  acc[value] = key;

  return value < 1;
};

const transformed = _.transform(baseArray, func, {});
console.log(transformed); // { 0: "a", 1: "b" };`,
      },
    },
  ],
};

export default transform;
