import React from "react";
import Link from "@src/components/common/Link";
import { RuleProps } from "@src/components/Rule";

const updateWith: RuleProps = {
  id: "_.updateWith",
  blocks: [
    {
      type: "title",
      title: { id: "_.updateWith-title", children: "_.updateWith" },
    },
    {
      type: "description",
      description: {
        id: "_.updateWith-description",
        children: (
          <>
            Принимает <b>объект, путь, функцию преобразоывания и функцию преобразования итогового объекта</b>.
            Возвращает <b>объект</b> после применения функции по указанному пути
            <div>
              Похож на метод <Link href="_.update">_.update</Link>, кроме того, что принимает функцию трансформации
              конечного объекта
            </div>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.updateWith-code",
        language: "ts",
        children: `const baseObject = { a: { c: 3 }, b: 2 };

const transform = (obj, key, baseObj) => ({
  ..._.mapValues(obj, (value) => value ** value),
});

const updatedWith = _.updateWith(baseObject, "a.d", (value) => value ** 2 || 5, transform);
console.log(updatedWith); // { a: { c: 27, d: 42 }, b: 2 };`,
      },
    },
  ],
};

export default updateWith;
