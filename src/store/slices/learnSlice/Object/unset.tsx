import React from "react";
import Link from "@src/components/common/Link";
import Warning from "@src/components/common/Warning";
import { RuleProps } from "@src/components/Rule";

const unset: RuleProps = {
  id: "_.unset",
  blocks: [
    {
      type: "title",
      title: { id: "_.unset-title", children: "_.unset" },
    },
    {
      type: "description",
      description: {
        id: "_.unset-description",
        children: (
          <>
            Принимает <b>объект и путь</b>. Возвращает <b>true</b>, если путь был удалён
            <Warning>Мутирует начальный объект</Warning>
            <div>
              Для удаления без мутации следует использовать <Link href="_.omit">_.omit</Link>
            </div>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.unset-code",
        language: "ts",
        children: `const baseObject = { a: { c: 1 }, b: 2 };

const isUnseted = _.unset(baseObject, "a['c']");
console.log(isUnseted); // true;
console.log(baseObject); // { a: {}, b: 2 };`,
      },
    },
  ],
};

export default unset;
