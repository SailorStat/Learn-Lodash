import React from "react";
import Link from "@src/components/common/Link";
import { RuleProps } from "@src/components/Rule";

const result: RuleProps = {
  id: "_.result",
  blocks: [
    {
      type: "title",
      title: { id: "_.result-title", children: "_.result" },
    },
    {
      type: "description",
      description: {
        id: "_.result-description",
        children: (
          <>
            Принимает <b>объект, путь и значение по умолчанию</b>. Возвращает{" "}
            <b>результат пути или значение по умолчанию</b>
            <div>
              Похож на метод <Link href="_.get">_.get</Link>, кроме того, что в качестве значения по умолчанию может
              быть функция с превязской к this переданного объекта
            </div>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.result-code",
        language: "ts",
        children: `const baseObject = {
  f1: { a: { c: 1 }, b: 1 },
  f2: { a: { c: 0 }, b: 6 },
  f3: { a: { c: 5 }, b: 2 },
  f4: { a: { c: 3 }, b: 1 },
};

const resulted = _.result(baseObject, "f3['a'].c");
console.log(resulted); // 5;

const resulted2 = _.result(baseObject, ["f4", "a", "f"], 42);
console.log(resulted2); // 42;

function func() {
  return this.f2.b;
}

const resulted3 = _.result(baseObject, "f5['a'].c", func);
console.log(resulted3); // 6;`,
      },
    },
  ],
};

export default result;
