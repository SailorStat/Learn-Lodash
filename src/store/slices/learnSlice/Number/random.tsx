import React from "react";
import { RuleProps } from "@src/components/Rule";

const random: RuleProps = {
  id: "_.random",
  blocks: [
    {
      type: "title",
      title: { id: "_.random-title", children: "_.random" },
    },
    {
      type: "description",
      description: {
        id: "_.random-description",
        children: (
          <>
            Возвращает <b>случайное число</b> между 0 и 1
            <div>
              Если передано <b>начальное и конечное значение</b>, то функция вернёт <b>целое число</b> между ними
            </div>
            <div>
              Если передано <b>true</b>, то функция вернёт <b>число с десятичной частью</b>
            </div>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.random-code",
        language: "ts",
        children: `console.log(_.random(1, 5)); // 3;
console.log(_.random(10)); // 5;
console.log(_.random(1, 3, true)); // 1.771795240174014;
console.log(_.random(10, true)); // 5.4601212538803985;`,
      },
    },
  ],
};

export default random;
