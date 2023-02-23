import React from "react";
import { RuleProps } from "@src/components/Rule";

const sampleSize: RuleProps = {
  id: "_.sampleSize",
  blocks: [
    {
      type: "title",
      title: { id: "_.sampleSize-title", children: "_.sampleSize" },
    },
    {
      type: "description",
      description: {
        id: "_.sampleSize-description",
        children: (
          <>
            Принимает <b>массив и длину итогового массива</b>, возвращает <b>массив случайных элементов</b> указанной
            длины
            <div>Порядок элементов случайный, но элементы не будут повторяться</div>
            <div>Если длина больше принятого массива, итоговый массив будет иметь длину исходного массива</div>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.sampleSize-code",
        language: "ts",
        children: `const baseArray = [1.3, 1.2, 4.5, 4.6];

const sampleSized = _.sampleSize(baseArray);
console.log(sampleSized); // [4.5];

const sampleSized2 = _.sampleSize(baseArray, 2);
console.log(sampleSized2); // [1.2, 4.5];`,
      },
    },
  ],
};

export default sampleSize;
