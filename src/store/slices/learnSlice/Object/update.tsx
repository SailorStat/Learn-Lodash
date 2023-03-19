import React from "react";
import Link from "@src/components/common/Link";
import { RuleProps } from "@src/components/Rule";

const update: RuleProps = {
  id: "_.update",
  blocks: [
    {
      type: "title",
      title: { id: "_.update-title", children: "_.update" },
    },
    {
      type: "description",
      description: {
        id: "_.update-description",
        children: (
          <>
            Принимает <b>объект, путь и функцию преобразоывания</b>. Возвращает <b>объект</b> после применения функции
            по указанному пути
            <div>
              Похож на метод <Link href="_.set">_.set</Link>, кроме того, что принимает функцию для обновления значения
            </div>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.update-code",
        language: "ts",
        children: `const baseObject = { a: { c: 1 }, b: 2 };

const updated = _.update(baseObject, "a.d", (value) => value ** 2 || 42);
console.log(updated); // { a: { c: 1, d: 42 }, b: 2 };`,
      },
    },
  ],
};

export default update;
