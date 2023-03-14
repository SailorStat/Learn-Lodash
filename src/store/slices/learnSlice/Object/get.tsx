import React from "react";
import { RuleProps } from "@src/components/Rule";

const get: RuleProps = {
  id: "_.get",
  blocks: [
    {
      type: "title",
      title: { id: "_.get-title", children: "_.get" },
    },
    {
      type: "description",
      description: {
        id: "_.get-description",
        children: (
          <>
            Принимает <b>объект, путь и значение по умолчанию</b>. Возвращает{" "}
            <b>результат пути или значение по умолчанию</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.get-code",
        language: "ts",
        children: `const baseObject = {
  f1: { a: { c: 1 }, b: 1 },
  f2: { a: { c: 0 }, b: 5 },
  f3: { a: { c: 5 }, b: 2 },
  f4: { a: { c: 3 }, b: 1 },
};

const geted = _.get(baseObject, "f3['a'].c");
console.log(geted); // 5;

const geted2 = _.get(baseObject, ["f4", "a", "c"]);
console.log(geted2); // 3;

const geted3 = _.get(baseObject, "f5['a'].c", 42);
console.log(geted3); // 42;`,
      },
    },
  ],
};

export default get;
